require 'active_model'
require 'active_support/all'

class Collection
  extend ActiveModel::Naming

  attr_accessor :name
  attr_reader :collection, :database

  def self.all(database)
    Database.connection.collection_names.map{ |name| self.new(database, name:name) }
  end

  def initialize(database, data={})
    @database = database
    @name = data[:name]
  end

  def self.create(database, data={})
    collection = self.new(database, data)
    collection.save
    collection
  end

  def save
    @collection = if valid?
      self.class.connection.db(@name)
    else
      nil
    end
    !@db.nil?
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

  def destroyed?
    true 
  end

  def persisted?
    !@db.nil?
  end

  def to_key
    persisted? ? @name : nil
  end

  def to_param
    persisted? ? @name : nil
  end

  def errors
    obj = Object.new
    def obj.[](key)         [] end
    def obj.full_messages() [] end
    obj
  end
end
