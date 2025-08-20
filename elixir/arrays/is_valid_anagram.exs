defmodule Solution do
  @spec is_anagram(s :: String.t(), t :: String.t()) :: boolean
  def is_anagram(s, t) when byte_size(s) != byte_size(t), do: false

  def is_anagram(s, t) do
    h =
      s
      |> String.graphemes()
      |> Enum.reduce(%{}, fn char, acc ->
        Map.update(acc, char, 1, &(&1 + 1))
      end)

    t
    |> String.graphemes()
    |> Enum.reduce_while({h, true}, fn char, {acc, _} ->
      case acc[char] do
        nil -> {:halt, {acc, false}}
        0 -> {:halt, {acc, false}}
        count -> {:cont, {Map.put(acc, char, count - 1), true}}
      end
    end)
    |> elem(1)
  end
end
