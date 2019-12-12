require_relative "./ingredient"
require "pry"

class Container
  attr_reader :weight, :maximum_holding_weight, :ingredients

  def initialize(weight, maximum_holding_weight)
    @maximum_holding_weight = maximum_holding_weight
    @weight = weight
    @ingredients = []
  end


  def fill_with_ingredient(ingredient)
    @ingredient = ingredient
    max_amount = (@maximum_holding_weight / ingredient.weight).to_i
    @weight += max_amount * ingredient.weight
    max_amount.times do
      @ingredients << ingredient
    end
  end

  def which_ingredient
    @ingredient.name
  end

  def how_many_ingredients
    @ingredients.length
  end

  def remove_one_ingredient
    removed = @ingredients.pop
  end

  def empty
    @ingredients.clear
    @weight = @starting_weight
  end
end
