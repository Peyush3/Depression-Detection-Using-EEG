from flask import Flask, request, render_template, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_cors import CORS, cross_origin
import json
import tensorflow as tf
from ai.ai_diagnosis import ai_diagnosis

# from tf.keras.preprocessing.image import load_img, img_to_array
# from tf.keras.applications.vgg16 import preprocess_input, decode_predictions
# from tf.python.keras.models import load_model
from PIL import Image

# from keras.models import load_model
# model = load_model('model.h5')

# model = tf.keras.models.load_model(
#     "C:/Users/divya/Desktop/CogniMind/CogniMind-Backend/ai/Models/KNN_EC.pkl"
# )

app = Flask(_name_)

CORS(app)
app.config["MONGODB_SETTINGS"] = {
    'db': 'cognimind',
    'host': '',
    'port': 27017  # default MongoDB port
}
db = MongoEngine(app)
# database models


class User(Document):
    age = IntField()
    email = StringField()
    password = StringField()
    gender = StringField()

class Patient(User):
    name = StringField(required=True)
    address = StringField()
    contact = IntField()
    reports = ListField(ReferenceField('Report'))

class Doctor(User):
    name = StringField(required=True)
    specialisation = StringField()
    contact = IntField()
    qualification = StringField()
    hospital_id = ReferenceField('Hospital')
    reports = ListField(ReferenceField('Report'))

class Admin(User):
    name = StringField(required=True)

class Hospital(Document):
    name = StringField(required=True)
    address = StringField()
    no_of_doctors = IntField()
    contact = IntField()
    doctors = ListField(ReferenceField('Doctor'))

class Report(Document):
    patient_id = ReferenceField('Patient', required=True)
    doctor_id = ReferenceField('Doctor', required=True)
    ai_diagnosis = StringField()
    doctor_comment = StringField()
    medication = StringField()
    date_created = DateTimeField(default=datetime.utcnow)

@app.route("/")
def index():
    return "Welcome to CogniMind!"


# @app.route("/predict", methods=["POST"])
# def predict():
#     imagefile = request.files["imagefile"]
#     image_path = "./images/" + imagefile.filename
#     imagefile.save(image_path)
#     image = tf.keras.utils.load_img(image_path, target_size=(224, 224))
#     image = tf.keras.utils.array_to_img(image)
#     image = image.reshape((1, image.shape[0], image.shape[1], image.shape[2]))
#     image = tf.keras.applications.mobilenet.preprocess_input(image)
#     yhat = model.predict(image)
#     label = tf.keras.applications.imagenet_utils.decode_predictions(yhat)
#     label = label[0][0]

#     classification = ""
#     return render_template("index.html", prediction=classification)


@app.route("/signup", methods=["GET", "POST"])
def signup():
    if request.method == "GET":
        return render_template("signup.html")
    if request.method == "POST":
        email = request.form.get("email")
        Username = request.form.get("username")
        password = request.form.get("password")
        user = User.query.filter_by(email=email).first()
        # if email already in database
        if user:
            return "User email already exists"
        # if username already in database
        user2 = User.query.filter_by(UserName=Username).first()
        if user2:
            return "Username already exists"
        return redirect(url_for("success_registration"))
    else:
        return "Invalid Request"


@app.route("/api", methods=["POST"])
@cross_origin()
def upload():
    try:
        file = request.files["file"]
    except:
        response = {"message": "Failed"}
        return response, 400
    data = request.form.to_dict()["data"]
    jsondata = json.loads(data)
    resp = ai_diagnosis(file, jsondata)
    # resp = {'Model 1': 'Depression', 'Model 2': 'Depression', 'Model 3': 'Depression', 'Model 4': 'Depression', 'Model 5': 'Depression', 'Model 6': 'Depression', 'Model 7': 'Depression', 'Model 8': 'Depression', 'Model 9': 'Depression', 'Model 10': 'Depression', 'Model 11': 'Depression', 'Model 12': 'Depression'}
    print(resp)
    response = {"message": "Successfully Uploaded"}

    return response, 200


if __name__ == "__main__":
    app.run(debug=True)
