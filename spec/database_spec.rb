
$: << File.dirname(__FILE__) unless $:.include? File.dirname(__FILE__)
require 'spec_helper'
require 'database'

describe Database do

  before :each do
    @name = 'test'
    Database.connection = Mongo::Connection.new
    Database.connection.drop_database(@name)
  end

  it 'can set the database connection' do
    Database.connection.wont_be_nil
  end

  it 'can get the all the databases' do
    Database.all.must_include(Database.new(name:'local'))
  end

  it 'can validate a database' do
    Database.new.valid?.must_equal false
  end

  it 'can create a new database, but it wont exist!' do
    database = Database.create(name:@name)
    database.mongo_db.wont_be_nil
    Database.all.wont_include(Database.new(name:@name))
  end

end


