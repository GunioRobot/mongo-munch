require 'active_model'
require 'active_support/all'

class Database
  extend ActiveModel::Naming

  cattr_accessor :connection

  attr_accessor :id, :name
  attr_reader :mongo_db

  def self.all
    self.connection.database_names.map{ |name| self.new(id:name,name:name) }
  end

  def self.find(data={})
    self.all.select { |database| database == self.new(data) }
  end

  def initialize(data={})
    @id = data[:id]
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
    { id:@id,name:@name }
  end

  def save
    @mongo_db = if valid?
      connection.db(@id)
    else
      nil
    end
    !@mongo_db.nil?
  end

  def ==(other)
    @id == other.id
  end

  def to_model
    self
  end

  def valid?
    !@name.to_s.empty?
  end

  def destroy
    connection.drop_database(@id)
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

  def to_key
    @id
  end

  def to_param
    @idj.parameterize unless @id.to_s.empty?
  end

  def errors
    obj = Object.new
    def obj.[](key)         [] end
    def obj.full_messages() [] end
    obj
  end
end
