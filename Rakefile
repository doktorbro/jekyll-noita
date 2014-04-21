require 'rake'

desc 'Preview the site with Jekyll'
task :preview do
  sh 'bundle exec jekyll serve --watch --drafts'
end

desc 'Test the site with Proofer'
task :test do
  require 'html/proofer'
  sh 'bundle exec jekyll build --trace'
end
