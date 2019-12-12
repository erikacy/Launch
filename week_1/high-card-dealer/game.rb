require 'pry'

require_relative "lib/deck"
require_relative "lib/player"
require_relative "lib/hand"

puts "GAME START!\n\n"

player_deck = Deck.new

puts "There are #{player_deck.cards.length} cards in the deck.\n\n"
    binding.pry

player_1 = Player.new("Owner", Hand.new(player_deck))
player_2 = Player.new("Fluffball", Hand.new(player_deck))
    binding.pry
puts "#{player_1.name} was dealt #{player_1.show_hand}\n#{player_2.name} was dealt #{player_2.show_hand}\n\n"
    binding.pry
binding.pry
    binding.pry
puts "#{player_1.name}'s hand value: #{player_1.hand_object.sum}"
puts "#{player_2.name}'s hand value: #{player_2.hand_object.sum}"
    binding.pry
winner = player_1

if player_2.hand_object.sum == player_1.hand_object.sum
  puts "\nTIE!"
else
  if player_2.hand_object.sum > player_1.hand_object.sum
    winner = player_2
  end
  puts "\n#{winner.name} wins the game!"
end
