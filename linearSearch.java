public abstract class linearSearch {
    public static void main(String[] args) {
        int arr[] = { 1, 2, 3, 4, 5, 6, 7 };
        linearSearchFunc(arr, arr.length, 2);
    }

    public static void linearSearchFunc(int arr[], int len, int q) {
        for (int i = 0; i < len; i++) {
            if (arr[i] == q) {
                System.out.println("Found q @ index " + i);
                break;
            } else {
                System.out.println("q does not exist");
            }
        }
    }
}
