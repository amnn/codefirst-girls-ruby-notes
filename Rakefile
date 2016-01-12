require 'rake/clean'
require 'yaml'
require 'uri'
require 'jekyll'

# Configuration
WKHTMLTOPDF = ENV["WKHTMLTOPDF"] || "wkhtmltopdf"
JEKYLL_PORT = ENV["JEKYLL_PORT"] || 5000

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

def pdf_file_task(suffix, path, wkhtmltopdf_options = [])
  pdf_filename = File.join("_pdfs", "advanced_ruby_session_#{suffix}.pdf")

  file pdf_filename => "_pdfs" do |t|
    cmd = [WKHTMLTOPDF]
    cmd << "--user-style-sheet " + File.join("css", "wkhtmltopdf.css")
    cmd << wkhtmltopdf_options.join(" ")
    cmd << URI.join("http://localhost:#{JEKYLL_PORT}", path).to_s
    cmd << pdf_filename

    system cmd.join " "
  end

  task "pdf:create" => pdf_filename
  CLOBBER << pdf_filename
end

pdf_file_task "outline", "/", ["--disable-external-links", "--no-outline"]
pdf_file_task "prep", "/course-preparation/"

sessions.each_with_index do |session, index|
  pdf_file_task index + 1, session.url
end

task :default => "pdf:create"
