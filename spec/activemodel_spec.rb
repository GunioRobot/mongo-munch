
$: << File.dirname(__FILE__) unless $:.include? File.dirname(__FILE__)
require 'spec_helper'

class DatabaseTest < ActiveModel::TestCase
  include ActiveModel::Lint::Tests

  require 'database'

  def setup
    @model = Database.new
  end
end

