require 'rubygems'
require 'bundler/setup'

Bundler.require(:default) 
platform = RUBY_PLATFORM.match(/(linux|darwin)/)[0].to_sym
Bundler.setup(platform)

require 'minitest/spec'
require 'minitest/autorun'
