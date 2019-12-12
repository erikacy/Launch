# class Circle
#   def initialize(input)
#     if input.kind_of?(Hash)
#       if input[:radius].nil?
#         @radius = input[:diameter]/2
#       else
#         @radius = input[:radius]
#       end
#     else
#       @radius = input
#     end
#   end
# end

class Circle
  def initialize(option_or_radius)
    if option_or_radius.kind_of?(Hash)
      @radius = option_or_radius[:radius] || (option_or_radius[:diameter] / 2)
    else
      @radius = option_or_radius
    end
  end
end
