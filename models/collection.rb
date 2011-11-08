require 'active_model'
require 'active_support/all'

class Collection
  extend ActiveModel::Naming

  attr_accessor :name
  attr_reader :mongo_collection, :database

  def self.all(database)
    database.mongo_db.collection_names.map{ |name| self.new(database, name:name) }
  end

  def initialize(database, data={})
    @database = database
    @name = data[:name]
  end

  def mongo_db
    @database.mongo_db
  end

  def to_hash
    { name:@name, id:id }
  end

  def connection
    @database.connection
  end

  def self.create(database, data={})
    collection = self.new(database, data)
    collection.save
    collection
  end

  def save
    @mongo_collection = if valid?
      mongo_db.collection(@name)
    else
      nil
    end
    !@mongo_collection.nil?
  end

  def ==(other)
    @name == other.name
  end

  def to_model
    self
  end

  def valid?
    !@database.nil? && !@name.to_s.empty?
  end

  def new_record?
    !persisted?
  end

  def destroy
    @mongo_collection.drop
  end

  def destroyed?
    true 
  end

  def persisted?
    !@mongo_collection.nil?
  end

  def id
    @name
  end

  def to_key
    id
  end

  def to_param
    id
  end

  def errors
    obj = Object.new
    def obj.[](key)         [] end
    def obj.full_messages() [] end
    obj
  end
end
