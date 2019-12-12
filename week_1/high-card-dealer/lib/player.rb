class Player
  attr_reader :name, :hand_object

  def initialize(name, hand_object)
    @name = name
    @hand_object = hand_object
  end

  def show_hand
    @hand_object.hand.map {|card| "#{card.rank}#{card.suit}"}.join(", ")
  end
end
