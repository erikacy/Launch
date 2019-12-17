require 'sinatra'

require "sinatra/reloader" if development?
require "pry" if development? || test?

set :bind, '0.0.0.0'

recipe = {
  name: "Roasted Brussels Sprouts",
  ingredients: [
    "1 1/2 pounds Brussels sprouts",
    "3 tablespoons good olive oil",
    "3/4 teaspoon kosher salt",
    "1/2 teaspoon freshly ground black pepper"
  ],
  directions: [
    "Preheat oven to 400 degrees F.",
    "Cut off the brown ends of the Brussels sprouts.",
    "Pull off any yellow outer leaves.",
    "Mix them in a bowl with the olive oil, salt and pepper.",
    "Pour them on a sheet pan and roast for 35 to 40 minutes.",
    "They should be until crisp on the outside and tender on the inside.",
    "Shake the pan from time to time to brown the sprouts evenly.",
    "Sprinkle with more kosher salt ( I like these salty like French fries).",
    "Serve and enjoy!"
  ]
}

user_reviews = [
  {username: "Fluffball", rating: 5, review: "Foof! Fooffooffoof!"},
  {username: "Fluffball's Owner", rating: 5, review: "Fluffball really liked it, plus it's healthy (if you ease up on the salt, at least)."},
  {username: "Angie", rating: 2.5, review: "It's ok?? Wouldn't recommend though, too salty."},
  {username: "Gabe", rating: 4.5, review: "Angie.. these are for fluffballs. I hope you didn't actually eat it.. My fluffball liked it."},
]

get '/' do
  @name = recipe[:name]
  @ingredients = recipe[:ingredients]
  @directions = recipe[:directions]
  @reviews = user_reviews
  erb :index
end
