class MagicalCreature
attr_reader :name, :magical_ability, :age

  def initialize(name, magical_ability, age)
    @name = name
    @magical_ability = magical_ability
    @age = age
  end

  def ancient?
    if @age >= 200
      return true
    elsif @age == nil
      return false
    end
  end
end
