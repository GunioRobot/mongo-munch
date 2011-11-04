require 'active_model'
require 'active_support/all'

class Database
  extend ActiveModel::Naming

  cattr_accessor :connection

  def self.info
    self.connection.database_info
    # .to_a.map{|db| {id:db[0],name:db[0],size:db[1]} }.sort_by{ |c| c['name'] }.to_json
  end


  def to_model
    self
  end

  def valid?()      true end
  def new_record?() true end
  def destroyed?()  true end
  def persisted?()  true end

  def to_key
    persisted? ? 1 : nil
  end

  def to_param
    persisted? ? 1 : nil
  end

  def errors
    obj = Object.new
    def obj.[](key)         [] end
    def obj.full_messages() [] end
    obj
  end
end
