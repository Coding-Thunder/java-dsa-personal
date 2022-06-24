import java.util.Arrays;

public class bubbleSort {
    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 4, 5, 6 };
        applyBubbleSort(arr);
        System.out.println(Arrays.toString(arr));

    }

    public static void applyBubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n; i++) {
            boolean swapped = false;
            for (int j = 1; j < n - i; j++) {
                if (arr[j] < arr[j - 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j - 1];
                    arr[j - 1] = temp;
                    swapped = true;
                }
            }
            if (!swapped) {
                System.out.println("the array is already sorted");
                break;
            }
        }

    }
}