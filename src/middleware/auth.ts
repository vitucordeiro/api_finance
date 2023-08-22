interface props  {
    username:ReadableStream<Uint8Array> | null

}

const handler = (Request:Request, Response:Response)=>{
    const data = Request.body
    const {username, email }:props = data
}