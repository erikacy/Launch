class Square
  attr_reader :value, :x, :y, :length, :width, :diameter, :perimeter, :area
  def initialize(value, x = 0, y = 0)
    @value = value
    @x = x
    @y = y
    @length = value
    @width = value
    @area = @length * @width
    @diameter = Math.sqrt((@length ** 2) + (@width ** 2))
    @perimeter = (2 * (@length + @width))
  end

  def contains_point?(x, y)
    if x < @width && y < @length && x >= 0 && y >= 0
      true
    else
      false
    end
  end
end
