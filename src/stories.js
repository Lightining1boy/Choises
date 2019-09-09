import { finished } from "stream";

const choice_1_B = {
  end: true,
  description: 'You open the wooden door and a burst of light comes through the open doorway. Beyond the door is peaceful wood you step outside and begin to make you way home.'
}
const choice_2_A = {
  end: true,
  description:'You open the wooden door and a burst of light comes through the open doorway. Beyond the door is peaceful wood you step outside and begin to make you way home.'
}
const choice_3_A = {
  end: false,
  description: 'You attempt you kick open the door but it doesn\'t budge.',
  choice_A: 'Turn around and walk over to the door on the far end of the room and open it',
  choice_A_Result: choice_2_A
}
const choice_2_B = {
  end: false,
  description: 'You turn around to go back the way you came but the door seems to have locked itself',
  choice_A: 'Attempt to force the door open',
  choice_B: 'Turn around and walk over to the door on the far end of the room and open it',
  choice_A_Result: choice_3_A,
  choice_B_Result: choice_2_A
}
const choice_1_A = {
  end: false,
  description: 'You step over to the door on your right. You open the heavy wooden door and step inside into the room and look around. It\'s similar to the other room, same grey stone walls but the difference becomes clear when you see only one door on the far end of the room',
  choice_A: 'Walk over to the door on the far end of the room and open it',
  choice_B: 'Go back the way you came',
  choice_A_Result: choice_2_A,
  choice_B_Result: choice_2_B
}
const beginning = {
  end: false,
  title: 'The Stone Room',
  description: 'You suddenly wake with a throbbing headache not knowing where you are. You look around and all you see are stone walls and two wooden doors with solid metal hinges. The room your in is dimmly lit by a light coming through a crack in the wall.',
  choice_A: 'Open the door on your right',
  choice_B: 'Open the door on your left',
  choice_A_Result: choice_1_A,
  choice_B_Result: choice_1_B
}
const finish = {
  end: true,
  description: 'You go over and sit in the chair'
}
const start = {
  end: false,
  title: 'chair',
  description: 'you see a chair.',
  choice_A: 'Go and sit in the chair',
  choice_A_Result: finish,
}
let story = [[beginning, choice_1_A, choice_1_B, choice_2_A, choice_2_B, choice_3_A], [start, finish]]
export default story  
