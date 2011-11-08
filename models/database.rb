require 'active_model'
require 'active_support/all'

class Database
  extend ActiveModel::Naming

  cattr_accessor :connection

  attr_accessor :name
  attr_reader :mongo_db

  def self.all
    self.connection.database_names.map{ |name| self.new(name:name) }
  end

  def initialize(data={})
    @name = data[:name]
    save
  end

  def connection
    self.class.connection
  end

  def self.create(data={})
    self.new(data)
  end

  def to_hash
    { name:@name, id:id }
  end

  def save
    @mongo_db = if valid?
      connection.db(@name)
    else
      nil
    end
    !@mongo_db.nil?
  end

  def ==(other)
    @name == other.name
  end

  def to_model
    self
  end

  def valid?
    !@name.to_s.empty?
  end

  def destroy
    connection.drop_database(@name)
  end

  def new_record?
    !persisted?
  end

  def destroyed?
    !persisted?
  end

  def persisted?
    self.class.all.include?(self)
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
