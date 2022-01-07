import pyautogui
import time
import random
pyautogui.FAILSAFE = False
while True:
    time.sleep(random.randrange(30,90))
    for i in range(0,100):
        pyautogui.moveTo(i,i)
    for i in range(0,3):
        pyautogui.press((random.randint(48,90)))
    