from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('intro.html')

@app.route('/second')
def second():
    return render_template('second.html')

if __name__ == '__main__':
    app.run(debug=True)
