class BoundingArea

  def initialize(boxarray)
    @boxarray = boxarray
  end

  def boxes_contain_point?(x, y)
    @boxarray.each do |box|
      if box.contains_point?(x, y)
        return true
      end
    end
    return false
  end
end
