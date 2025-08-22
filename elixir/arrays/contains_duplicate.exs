defmodule Solution do
  def contains_duplicate(nums) when length(nums) < 2, do: false

  @spec contains_duplicate(nums :: [integer]) :: boolean
  def contains_duplicate(nums) do
    check_duplicates(nums, MapSet.new())
  end

  defp check_duplicates([], _seen), do: false
  defp check_duplicates([head | tail], seen) do
    if MapSet.member?(seen, head) do
      true
    else
      check_duplicates(tail, MapSet.put(seen, head))
    end
  end
end

# Test cases
IO.puts Solution.contains_duplicate([1,2,3,1]) # true
IO.puts Solution.contains_duplicate([1,2,3,4]) # false
IO.puts Solution.contains_duplicate([1,1,1,3,3,4,3,2,4,2]) # true