defmodule Solution do
  def two_sum(nums, target), do: do_two_sum(nums, target, %{}, 0)

  defp do_two_sum([], _target, _seen, _i), do: nil

  defp do_two_sum([head | tail], target, seen, i) do
    complement = target - head

    case Map.get(seen, complement) do
      nil -> do_two_sum(tail, target, Map.put(seen, head, i), i + 1)
      found -> [found, i]
    end
  end
end
