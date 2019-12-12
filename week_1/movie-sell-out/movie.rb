# 1) Create a class that has a REQUIRED number of seats and the number of patrons admitted, starting from 0.

# 2) If number of patrons not given, default to 1. Otherwise use @patrons to increase the number admitted into the theater. Can't be greater than # of seats.

# 3) Create capacity to check if all seats are filled (true) or not (false)



class Theater

  def initialize(seats, admitted = 0)
    @capacity = seats
    @admitted = 0

  end

  def admit!(patrons = 1)
    if @admitted + patrons > @capacity
      "All seats are taken, you'll have to come back to the next showing. Sorry 'bout that."
    else
      @admitted += patrons
    end
  end

  def at_capacity?
    @admitted == @capacity
  end

  def record_walk_outs!(patrons = 1)
    @admitted -= patrons
  end
end

movies = Theater.new(5)

puts movies.admit!(200)
