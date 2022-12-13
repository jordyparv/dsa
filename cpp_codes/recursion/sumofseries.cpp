#include<bits/stdc++.h>
using namespace std;
 long long sumOfSeries(long long n) {
        
    long long  sum = (n*(n+1)/2);
    return sum * sum;
 }
int main(){
    cout<<sumOfSeries(50000);
}