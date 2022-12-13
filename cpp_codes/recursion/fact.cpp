#include<bits/stdc++.h>
using namespace std;

 long long factorial(long long n){
        return(n==1||n==0)?1:n*factorial(n-1);
    }
    vector<long long> factorialNumbers(long long N)
    {
        vector <long long> ans;
        int i =1;
        while(factorial(i)<=N){
            ans.push_back(factorial(i));
            i++;
        }
        return ans;
    }
    int main(){  
        auto result = factorialNumbers(3);
        for(auto it :result){
            cout<<it<<" ";
        }
    }