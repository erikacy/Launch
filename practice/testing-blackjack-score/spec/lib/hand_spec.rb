require "spec_helper"

describe Hand do
  # These UTF-8 characters will be useful for making different hands:
  # '♦', '♣', '♠', '♥'

  let(:hand) { Hand.new([Card.new("♦",10), Card.new("♥","J")]) }
  let(:second_hand) { Hand.new([Card.new("♦", 2), Card.new("♦", 4)]) }
  let(:third_hand) { Hand.new([Card.new("♦", "Q"), Card.new("♦", 3), Card.new("♣", 4)]) }
  let(:fourth_hand) { Hand.new([Card.new("♦", "A"), Card.new("♦", 3)]) }
  let(:fifth_hand) { Hand.new([Card.new("♦", "A"), Card.new("♦", 5), Card.new("♦", 10)]) }
  let(:sixth_hand) { Hand.new([Card.new("♦", "A"), Card.new("♦", 5), Card.new("♦", 10), Card.new("♣", "A"), Card.new("♥", "A")]) }
  let(:seventh_hand) { Hand.new([Card.new("♦", 9), Card.new("♦", 5), Card.new("♦", 10), Card.new("♣", "A"), Card.new("♥", "A")]) }

  describe "#calculate_hand" do

    it "returns 20" do
      expect(hand.calculate_hand).to eq(20)
    end

    it "returns 4" do
      expect(second_hand.calculate_hand).to eq(6)
    end

    it "returns 17" do
      expect(third_hand.calculate_hand).to eq(17)
    end

    it "returns 14" do
      expect(fourth_hand.calculate_hand).to eq(14)
    end

    it "returns 16" do
      expect(fifth_hand.calculate_hand).to eq(16)
    end

    it "returns 18" do
      expect(seventh_hand.calculate_hand).to eq(26)
    end
  end
end
