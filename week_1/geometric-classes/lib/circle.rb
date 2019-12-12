class Circle
  attr_reader :x, :y, :radius, :diameter, :area, :perimeter

  def initialize(radius, x = 0, y = 0)
    @radius = radius
    @x = x
    @y = y
    @diameter = radius * 2
    @area = Math::PI * radius * radius
    @perimeter = Math::PI * diameter
  end
end
