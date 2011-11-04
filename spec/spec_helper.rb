require 'rubygems'
require 'bundler/setup'

Bundler.require(:default) 
platform = RUBY_PLATFORM.match(/(linux|darwin)/)[0].to_sym
Bundler.setup(platform)

require 'active_model'

require 'minitest/spec'
require 'minitest/autorun'

$: << File.join(File.dirname(__FILE__), '..', 'models') unless $:.include? File.join(File.dirname(__FILE__), '..', 'models')

