import mysql.connector
from flask import Flask, render_template, request, jsonify
app = Flask(__name__)


mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="Ranjini@2504",
  database="carinventory"
)

@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('/index.html')


@app.route('/insertdata', methods=['GET', 'POST'])
def insertdata():
    if request.method == 'POST':
        details = request.get_json()
        carid = details['car_id']
        make = details['make']
        model = details['model']
        year = details['year']
        cur = mydb.cursor()
        cur.execute("INSERT INTO CarInsert(car_id, car_make, car_model, car_year)  VALUES (%s, %s, %s, %s)", (carid, make,model,year))
        mydb.commit()
        cur.close()
        output = {'msg': "Inserted into the db"}
        return jsonify(output=output)
    return render_template('/insert.html')

@app.route('/updatedata', methods=['GET', 'POST'])
def updatedata():
    if request.method == 'POST':
        details = request.get_json()
        carid = details['car_id']
        make = details['make']
        model = details['model']
        year = details['year']
        cur = mydb.cursor()
        cur.execute("UPDATE CarInsert SET car_make =%s,car_model = %s , car_year = %s where car_id=%s",(make,model,year,carid))        
        data = cur.fetchall()
        mydb.commit()
        cur.close()
        return render_template('/update.html', data = data)    
    return render_template('/update.html')
     

if __name__ == '__main__':
    app.run()
