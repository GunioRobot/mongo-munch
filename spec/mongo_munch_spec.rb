
$: << File.dirname(__FILE__) unless $:.include? File.dirname(__FILE__)
require 'spec_helper'
require 'capybara'
require 'capybara/dsl'
require './mongo_munch'

describe MongoMunch do

  include Capybara::DSL

  before  do
    Capybara.app = MongoMunch
  end

  it 'has a page' do
    visit '/'
    page.must_have_content('Mongo Munch')
  end
end
