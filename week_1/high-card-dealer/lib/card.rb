class Card
  attr_reader :rank, :suit
  def initialize(rank, suit)
    @rank = rank
    @suit = suit
  end

  def value
    if ['J', 'Q', 'K', 'A'].include?(@rank)
      face_card_value = {
        'J' => 11,
        'Q' => 12,
        'K' => 13,
        'A' => 14
      }
      return face_card_value[@rank]
    else
      @rank
    end
  end
end
