require 'rake'
require "desk"
require "active_support/inflector"
require "erb"
require 'reverse_markdown'

desc 'Preview the site with Jekyll'
task :preview do
  sh 'bundle exec jekyll serve --watch --drafts'
end

desc 'Test the site with Proofer'
task :test do
  require 'html/proofer'
  sh 'bundle exec jekyll build --trace'
  HTML::Proofer.new('./_site').run
end

desc "Import the articles from desk into Octopress in the source/documentation/directory"
task :desk_import do
  # All methods require authentication. To get your Desk OAuth credentials,
  # register an app in the Desk.com admin for your account at http://your-domain.desk.com/admin
  Desk.configure do |config|
    config.support_email = "help@example.com"
    config.subdomain = 'pantheon-systems'
    config.consumer_key = 'rGbFrW6NXnKgBbIzj0ll'
    config.consumer_secret = 'UOOUB4g48SBMMQnCxlYTyHk1hXvlvWNLhCO49uxR'
    config.oauth_token = 'CibXWhhDK7LO7R53iANg'
    config.oauth_token_secret = 'jGVVDnrupEtBPfWkB9u2cG9J1Dc4wKxLAJ3B2v1e'
  end

  desk_doc_template = File.new("desk_doc.erb", "r").read()
  renderer = ERB.new(desk_doc_template)
  target = "documentation/"
  redirects = {}
  page = 1
  while articles = Desk.articles(:page => page)
    if articles.count == 0
      break
    end
    articles.each do |a|
      # Make attachment urls full for now.
      # TODO:
      #   Turn off redirection to our "helpdesk" domain name for desk.
      #   Make a helpdesk.getpantheon.com pantheon site with a redirection index.php
      #   These URLs will continue to go through to images until we can deprecte
      body = ReverseMarkdown.convert(
        a.body.gsub('/customer/portal/attachments', 'https://pantheon-systems.desk.com/customer/portal/attachments')
        )
      title = a.subject
      slug = title.parameterize
      categories = [a.topic.name.parameterize]
      next if a.topic.name.parameterize == 'canned-responses'
      permalink = 'documentation/' + slug + '.html'
      filename = target + slug + '.markdown'
      html_content = renderer.result(binding)
      puts "Writing " + filename + "\n"
      File.open(filename, "w") do |file|
        file.puts html_content
      end
      redirects[a.id] = permalink
    end
    page = page + 1
  end

  puts "\n\n ### Wrote all files ###\n"
  puts " ### Handling Internal Links ### \n\n"

  # Fix internal links.
  Dir.glob("source/documentation/*.markdown") do |md_file|
    puts "Rewriting #{md_file}\n"
    fixed_md = File.read(md_file)
    redirects.each do |id, url|
      puts "-> Redirect #{id} - url: #{url}\n"
      replace = '/' + url
      fixed_md = fixed_md.gsub(/http:\/\/helpdesk.getpantheon.com\/customer\/portal\/articles\/#{id}/, replace)
    end
    File.open(md_file, "w") do |file|
      file.puts fixed_md
    end
  end
end
