class Character
  attr_reader :name, :actor

  def initialize(name, species, actor, type)
    @name = name
    @species = species
    @actor = actor
    @type = type
  end

  def summary
    "#{@name} (#{@species})"
  end

  def hero?
    if @type == "hero"
      true
    else
      false
    end
  end
end
