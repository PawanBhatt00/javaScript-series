function counter(count)
{
    count++;

    return function print() {
        console.log(count);
    }
}

// let result=counter(8);
// result();

counter(5)();//IEFE