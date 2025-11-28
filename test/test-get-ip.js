import os from 'os';
function getLocalIp(){
    const interfaces = os.networkInterfaces();
    if (interfaces.WLAN){
        for (const inter of interfaces.WLAN){
            if (inter.family === 'IPv4' && !inter.internal){
                return inter.address;
            }
        }
    }
    return '127.0.0.1';
}
console.log(getLocalIp());