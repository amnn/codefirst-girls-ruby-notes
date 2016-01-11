require 'rake/clean'
require 'yaml'
require 'uri'
require 'jekyll'

# Configuration
wkhtmltopdf = ENV["WKHTMLTOPDF"] || "wkhtmltopdf"
jekyll_port = ENV["JEKYLL_PORT"] || 5000

jekyll_site = Jekyll::Site.new(Jekyll.configuration quiet: true)
jekyll_site.read

sessions = jekyll_site.collections["sessions"].docs.sort_by do |session|
  jekyll_site.site_data["sessions_order"].index(File.basename session.relative_path, ".md")
end

directory "_pdfs"

namespace :pdf do
  task :create
  task :regenerate => [:clobber, :create]
end

sessions.each_with_index do |session, num|
  pdf_filename = File.join("_pdfs", "advanced_ruby_session_#{num + 1}.pdf")

  file pdf_filename => "_pdfs" do |t|
    cmd = [wkhtmltopdf]
    cmd << "--user-style-sheet " + File.join("css", "wkhtmltopdf.css")
    cmd << URI.join("http://localhost:#{jekyll_port}", session.url).to_s
    cmd << pdf_filename

    system cmd.join " "
  end

  task "pdf:create" => pdf_filename
  CLOBBER << pdf_filename
end

task :default => "pdf:create"
