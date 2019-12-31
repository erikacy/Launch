require_relative 'deck'

class Hand
  def initialize(cards)
  @cards = cards
  end

  def calculate_hand
  aces = []
  total = @cards.reduce(0) {|sum, card|
    value = card.rank
    if ["J", "Q", "K"].include?(card.rank)
      value = 10
    elsif card.rank == "A"
      value = 11
      aces << "A"
    end
    sum + value
  }
  if total > 21
    while !aces.empty? && total > 21
      total -= 10
      aces.pop
    end
  end
  total
  
  end
end
