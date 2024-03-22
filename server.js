import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

app.use(express.static(path.join(__dirname + '/public')))

app.get('/', (req,res) => {
  try
  {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  } 

  catch (error) 
  {
    console.error('Error sending file:', error);
  }
})

app.get('/about', (req,res) => {
  try
  {
  res.sendFile(path.join(__dirname, 'public', 'about.html'))
  }
  catch (error) 
  {
    console.error('Error sending file:', error);
  }
})

app.get('/products', (req,res) => {
  try
  {
  res.sendFile(path.join(__dirname, 'public', 'products.json'))
  }
  catch (error) 
  {
    console.error('Error sending file:', error);
  }
})

app.use((req,res) => {
  res.status(404);
  res.send(`<h1>Error 404: Resource Not Found</h1>`)
})

app.listen(3000, () => {
  console.log('App Listening on Port 3000')
})







// import http from 'http'
// let port = 3000

// const server = http.createServer((req,res) => {
//   res.end('Hello World')
// })

// server.listen(port)

// console.log(`server Listing on por ${port}`)