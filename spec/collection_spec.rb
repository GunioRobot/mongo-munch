
$: << File.dirname(__FILE__) unless $:.include? File.dirname(__FILE__)
require 'spec_helper'
require 'database'
require 'collection'

describe Collection do

  before :each do
    @name = 'test'
    Database.connection = Mongo::Connection.new
    Database.connection.drop_database(@name)
    @database = Database.create(name:@name)
  end

  it 'can get the all the collection' do
    Collection.all(@database).must_equal []
  end

  it 'can validate a collection' do
    Collection.new(@database).valid?.must_equal false
  end

  it 'can create a new collection, but it wont exist!' do
    collection = Collection.create(@database,name:@name)
    collection.mongo_db.wont_be_nil
    Collection.all(@database).must_equal []
  end

end


