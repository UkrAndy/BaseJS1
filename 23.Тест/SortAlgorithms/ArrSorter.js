class ArrSorter {
    static boobleSort(arr) {
        const copyArr = [...arr]
        let end = copyArr.length
        do {
            var change = false
            for (let i = 1; i < end; i++) {
                if (copyArr[i - 1] > copyArr[i]) {
                    const t = copyArr[i]
                    copyArr[i] = copyArr[i - 1]
                    copyArr[i - 1] = t
                    change = true
                }
            }
            end--
        } while (change)
        return copyArr
    }
    static shakerSort(arr) {
        const copyArr = [...arr]
        let start = 1
        let end = copyArr.length
        do {
            //-- Прямий хід (зліва-направо)
            var change = false
            for (let i = start; i < end; i++) {
                if (copyArr[i - 1] > copyArr[i]) {
                    const t = copyArr[i]
                    copyArr[i] = copyArr[i - 1]
                    copyArr[i - 1] = t
                    change = true
                }
            }
            end--
            if (change == false)
                break
            //-- Зворотній хід (справа-наліво)
            var change = false
            for (let i = end - 1; i >= start; i--) {
                if (copyArr[i - 1] > copyArr[i]) {
                    const t = copyArr[i]
                    copyArr[i] = copyArr[i - 1]
                    copyArr[i - 1] = t
                    change = true
                }
            }
            start++
        } while (change)
        return copyArr
    }
    static selectionSort(arr) {
        const copyArr = [...arr]
        for (let i = 0; i < copyArr.length - 1; i++) {
            let minIndex = i
            for (let j = i+1; j < copyArr.length; j++) {
                if (copyArr[j] < copyArr[minIndex])
                    minIndex = j
            }
            if (minIndex != i) {
                const t = copyArr[i]
                copyArr[i] = copyArr[minIndex]
                copyArr[minIndex] = t
            }
        }
        return copyArr
    }
    static insertionSort(arr) {
        const copyArr = [...arr]
        for (let i = 1; i < copyArr.length; i++) {
            let temp=copyArr[i]
            let j=i-1
            while(j>=0 && copyArr[j]>temp)
                {
                    copyArr[j+1]=copyArr[j]
                    j--
                }
            copyArr[j+1]=temp
        }
        return copyArr
    }
}
