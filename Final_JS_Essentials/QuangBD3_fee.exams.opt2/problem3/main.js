
// Em chua lam xong, thieu ham check xem ma tran co thoa man dieu kien ??/

// Check phan tu
function checkPhanTu(giaTri,i,j){
    let giaTriMax = 0, giaTriMin = 2000;
    
    for(let x = 0 ; x < maTran.length ; x++){

        // tim gia tri max theo cot j
        if(maTran[x][j] > giaTriMax){
            giaTriMax = maTran[x][j];
        }

        // tim gia tri min theo hang i
        if( maTran[i][x] < giaTriMin){
            giaTriMin = maTran[i][x];
        }
        
    }
    if(giaTriMax === giaTriMin && giaTriMax === giaTri){
        return 1;
    }else{
        return 0;
    }
    
}


// Test

var maTran1 = [[15,3,9],[55,4,6],[76,1,2]];
console.log(checkMaTran(maTran1));


var maTran2 = [[1,10,3],[9,3,3],[4,5,8]];
console.log(checkMaTran(maTran2));