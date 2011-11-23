
guard 'minitest', verbose:true, bundler:true, notify:true  do
  watch(%r|^spec/(.*)_spec\.rb|)
  watch(%r|^models/(.*)\.rb|)         { |m| "spec/#{m[1]}_spec.rb" }
  watch(%r|^spec/spec_helper\.rb|)    { "spec" }
end

#guard 'rake', :task => 'assetpack:build' do
#  watch(%r{^app/js/(.*)\.(js|coffee)$})
#end

spec_location = "spec/javascripts/%s_spec"

guard 'jasmine-headless-webkit' do
  watch(%r{^app/views/.*\.jst$})
  watch(%r{^app/js/(.*)\.js$}) { |m| newest_js_file(spec_location % m[1]) }
  watch(%r{^spec/javascripts/(.*)_spec\..*}) { |m| newest_js_file(spec_location % m[1]) }
end

