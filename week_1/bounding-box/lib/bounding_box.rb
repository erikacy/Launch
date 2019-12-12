class BoundingBox
  attr_reader :width, :height, :x, :y, :top, :left, :right, :bottom

  def initialize(x, y, width, height)
    @width = width
    @height = height
    @x = x
    @y = y

    @top = y + height
    @left = x
    @right = x + width
    @bottom = y
  end

  def contains_point?(x, y)
    if x >= @left && x <= @right && y >= @bottom && y <= @top
      return true
    else
      return false
    end
  end
end
