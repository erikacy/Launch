require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'csv'

require_relative 'models/articles.rb'

set :bind, '0.0.0.0'  # bind to all interfaces

get "/" do
  redirect "/articles"
  erb :index
end

get "/articles/new" do
  erb :new
end

get "/articles" do
  @array = Articles.retrieve_articles_objects('articles.csv')
  erb :index
end

post "/articles/new" do
  array = Articles.retrieve_articles_objects('articles.csv')
  id = array.last.id.to_i + 1
  title = params["title"]
  description = params["description"]
  url = params["url"]

  if title != "" && description != "" && url != ""
    CSV.open("articles.csv", "a") do |csv_file|
      csv_file << [id, description, title, url]
    end
    redirect "/articles"
  else
    erb :new
  end
end
