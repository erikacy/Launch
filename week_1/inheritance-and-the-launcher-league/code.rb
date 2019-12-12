class SuperHero
  attr_reader :public_identity, :secret_identity


  def initialize(public_identity, secret_identity)
    @public_identity = public_identity
    @secret_identity = secret_identity
  end

  def species
    "Human"
  end

  def home
    "Earth"
  end

  def fans_per_thousand
    500
  end

  def powers
    "superpower"
  end

  def weakness
    "Programming"
  end

  def backstory
    "They have an interesting background, but you haven't gained enough friendship points to unlock it. Too bad!"
  end

  def speed_in_mph
    60
  end

  def health
    100
  end

  def psychic?
    false
  end

end

class Speedster < SuperHero
  def speed_in_mph
    60000
  end
end

class Brawler < SuperHero
  def health
    2000
  end
end

class Detective < SuperHero
  def weakness
    @public_identity = "Luke Bayne"
  end

  def speed_in_mph
    10
  end
end

class Demigod < SuperHero
  def home
    "Cosmic Plane"
  end
end

class JackOfAllTrades < SuperHero
  def species
    "Alien"
  end

  def home
    "Venus"
  end

  def psychic?
    true
  end
end

class WaterBased < SuperHero
  def home
    "Earth's Oceans"
  end

  def fans_per_thousand
    5
  end

  def psychic?
    true
  end
end
