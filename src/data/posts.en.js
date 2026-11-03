export const postsEn = {
  'multi-around-monitor': {
    title: 'Surround View System',
    excerpt: 'Replacing the multimedia and finding a compromise solution for the cameras left room to implement a proper surround view system (surround view from here on). Let’s do it! Plus…',
    content: [
      { type: 'p', html: 'Replacing the multimedia and <a href="/posts/mitsubishi-connect-cameras">finding a compromise solution for the cameras</a> left room to implement a proper surround view system (<i>surround view</i> from here on).<br>Let’s do it! Plus, the whole thing is incredibly interesting )' },
      { type: 'h2', text: '1. Rear Camera' },
      { type: 'p', html: 'Since surround view on the second and third facelifts of the GF and GG bodies uses a fisheye camera—unlike mine, which has a flat lens—we’ll swap out the camera with a bolt-on replacement. The latest revision is <b>8781A163</b>. Let’s go with that.' },
      { type: 'image', src: '/assets/posts/multi-around-monitor/01.jpg', alt: 'New camera', caption: 'New camera', width: 1600, height: 1200 },
      { type: 'image', src: '/assets/posts/multi-around-monitor/02.jpg', alt: 'Image from the old camera', caption: 'Image from the old camera', width: 1600, height: 1200 },
      { type: 'image', src: '/assets/posts/multi-around-monitor/03.jpg', alt: 'Image from the new camera', caption: 'Image from the new camera', width: 1600, height: 1200 },
      { type: 'p', html: 'The image quality has improved, and the field of view has increased.' },
      { type: 'h2', text: '2. Front camera' },
      { type: 'h3', text: '2.1. Connecting and Selecting the Camera' },
      { type: 'p', html: 'Back in the winter, while preparing and planning and studying the wiring diagrams, I noticed that on the general wiring diagram for the harness running to the front bumper—<b>exclusively on pre-facelift hybrid versions for the Japanese market</b>—there is an unused 4-pin A-126 connector. It doesn’t appear on any other diagram. Where it comes from and why it was included is unclear. But I have some theories—front parking sensors, which were not included in any pre-facelift JDM PHEV trim level.' },
      { type: 'image', src: '/assets/posts/multi-around-monitor/04.jpg', alt: 'General engine compartment wiring diagram', caption: 'General engine compartment wiring diagram', width: 1600, height: 731 },
      { type: 'image', src: '/assets/posts/multi-around-monitor/05.jpg', alt: 'A-126 connector. It hangs on the radiator support and looks like it’s from a Toyota lambda sensor', caption: 'A-126 connector. It hangs on the radiator support and looks like it’s from a Toyota lambda sensor', width: 1600, height: 1200 },
      { type: 'p', html: 'Armed with the cheapest cable tracer, we traced where the wires from the connector go. And, naturally, they led to connector C-04—a connector that on many cars is simply plugged into the dashboard, the parking sensor connector.<br>Auto electricians charge 1,000 rubles for this—the cable tracer paid for itself. And most importantly, there’s no need to run wiring for the camera from the bumper into the cabin! Since the rear parking sensor wiring was already used for the <a href="/posts/bsw-3-installation">BSW</a> installation, there’s definitely no point in saving it—might as well put it to good use.<br>Let’s assign roles to the wires; here’s how it worked out for me:' },
      { type: 'image', src: '/assets/posts/multi-around-monitor/06.jpg', alt: 'C-04 connector', caption: 'C-04 connector', width: 1600, height: 1586 },
      { type: 'p', html: 'The front camera from the facelift is often sold together with a bracket, but there’s absolutely nowhere to mount it on my bumper. The front camera costs 1.5 times as much as the rear one, but in reality, the camera modules are exactly the same—the only difference is in the connector and the wire.<br>This means we’ll take another rear camera (<b>8781A163</b>), order a connector from a Toyota lambda sensor, and repin it according to the diagram we’ve planned. We’re in luck again: the pin types on the connectors are identical.' },
      { type: 'image', src: '/assets/posts/multi-around-monitor/07.jpg', alt: 'Repinning the front camera connector.', caption: 'Repinning the front camera connector.', width: 1600, height: 1200 },
      { type: 'p', html: 'We order a universal mount for car cameras, apply glass sealant to the joint between the connector and the camera, and our front camera is ready:' },
      { type: 'image', src: '/assets/posts/multi-around-monitor/08.jpg', alt: 'Front camera', caption: 'Front camera', width: 1600, height: 1200 },
      { type: 'image', src: '/assets/posts/multi-around-monitor/09.jpg', alt: 'Front camera', caption: 'Front camera', width: 1600, height: 1200 },
      { type: 'h3', text: '2.2. Camera Placement' },
      { type: 'p', html: 'When choosing a location for the camera, I based my decision on its position on the facelift models and the design of my bumper, making sure to avoid hitting a stiffener rib or wiring mount, while also ensuring the wire was long enough.<br>As a result, the camera was mounted in the radiator grille slightly off-center with a slight tilt (1–2 degrees) to compensate for the grille’s curvature. A rectangle was cut out of the grille itself, with a width equal to that of the camera and a depth equal to half the depth of the grille frame, so that the camera bracket would sit entirely on the plane of the frame. It is secured with 4mm clips.' },
      { type: 'image', src: '/assets/posts/multi-around-monitor/10.jpg', alt: 'Camera Mounting from the Inside', caption: 'Camera Mounting from the Inside', width: 1600, height: 1200 },
      { type: 'image', src: '/assets/posts/multi-around-monitor/11.jpg', alt: 'Camera. Front view', caption: 'Camera. Front view', width: 1600, height: 1200 },
      { type: 'h2', text: '3. Right-Side Mirror Camera' },
      { type: 'p', html: 'Let’s start with the wiring. Run 4 wires into the door. From connector C-210 to F-01 (schematic below). Crimp the pins and plug them into the connectors.' },
      { type: 'image', src: '/assets/posts/multi-around-monitor/12.jpg', alt: 'For some reason, there won’t be any photos here—just the diagram — Mitsubishi Outlander PHEV. Parts in the photo: MU801589', caption: 'For some reason, there won’t be any photos here—just the diagram', width: 1600, height: 988 },
      { type: 'p', html: 'As for the mirror itself: the mirror brackets for the passenger and driver sides are different. So you can’t just buy a passenger-side mirror designed for a left-hand drive car and bolt it on. The mirror’s range of motion won’t be sufficient for a clear view. You’ll either need to find a mirror specifically for a right-hand drive (driver’s side) or take the passenger-side mirror from a left-hand drive car, disassemble your new one, and swap out the bracket. In my case, it was the latter. You’ll need about an hour and a steady hand.' },
      { type: 'h2', text: '4. Left-Side Mirror Camera' },
      { type: 'p', html: 'For the left-side mirror, you’ll need to replace the camera and the camera panel/frame. Not only does the camera from the half-surround view system face forward instead of downward, but the image from it will also be rotated 90 degrees and mirrored.' },
      { type: 'image', src: '/assets/posts/multi-around-monitor/13.jpg', alt: 'Spoiler: image from the left camera of the half-surround view system', caption: 'Spoiler: image from the left camera of the half-surround view system', width: 1600, height: 1200 },
      { type: 'p', html: 'So we track down a camera and frame from a donor car, goodness knows where.' },
      { type: 'image', src: '/assets/posts/multi-around-monitor/14.jpg', alt: 'Camera and camera frame from the half-surround view system (top) and the surround view system (bottom)', caption: 'Camera and camera frame from the half-surround view system (top) and the surround view system (bottom)', width: 1600, height: 1200 },
      { type: 'image', src: '/assets/posts/multi-around-monitor/15.jpg', alt: 'Camera and camera frame from the half-surround view system (top) and the surround view system (bottom)', caption: 'Camera and camera frame from the half-surround view system (top) and the surround view system (bottom)', width: 1600, height: 1200 },
      { type: 'h2', text: '5. Camera Control Unit' },
      { type: 'p', html: 'The old control unit <b>8781A075</b> is no longer needed; it will be replaced by <b>8781A282</b>. Remove the bracket with the unit and swap one for the other. It sounds easy, but in reality, it’s pure torture! You’ll have to disconnect a lot of things, unclip a bunch of clips, shift the wiring harnesses, and cut up your hands ) The units look similar, but the mounting holes are positioned differently, so you’ll need to modify the bracket and drill at least two new holes.' },
      { type: 'image', src: '/assets/posts/multi-around-monitor/16.jpg', alt: 'The new unit (left), the old unit (right), and the mounting bracket with two new holes (center). — Mitsubishi Outlander PHEV. Parts in the photo: 8781A282, 8781A075', caption: 'The new unit (left), the old unit (right), and the mounting bracket with two new holes (center).', width: 1600, height: 1200 },
      { type: 'image', src: '/assets/posts/multi-around-monitor/17.jpg', alt: 'The new unit is secured to the bracket — Mitsubishi Outlander PHEV. Parts in the photo: 8781A075', caption: 'The new unit is secured to the bracket', width: 1600, height: 1200 },
      { type: 'p', html: 'Once again, through blood, pain, and wires, we put the bracket with the unit back in place.' },
      { type: 'h2', text: '6. Wiring' },
      { type: 'p', html: 'The control modules have identical connectors but different pinouts. This means the module’s wiring harness needs to be modified—re-pin and add wires from the front and right cameras. We do everything according to the diagram shown above. We keep the stock 20-pin connector, which connects the rear and left cameras, power, and CAN. We add an 8-10-pin connector to which we’ll connect the front and right cameras. The result is a harness that looks like this:' },
      { type: 'image', src: '/assets/posts/multi-around-monitor/18.jpg', alt: 'Wiring harness for the surround view camera system for the 2012–2014 JDM GG2W.', caption: 'Wiring harness for the surround view camera system for the 2012–2014 JDM GG2W.', width: 1600, height: 1200 },
      { type: 'p', html: 'Connect the 4 wires from the C-04 connector (front camera) and the 4 wires from the C-210 connector (right camera) to the mating end of the 8-10-pin connector. Join the harnesses and connect them to the unit:' },
      { type: 'image', src: '/assets/posts/multi-around-monitor/19.jpg', alt: 'The surround view system control unit is in place', caption: 'The surround view system control unit is in place', width: 1600, height: 1200 },
      { type: 'image', src: '/assets/posts/multi-around-monitor/20.jpg', alt: 'The harnesses are connected', caption: 'The harnesses are connected', width: 1600, height: 1200 },
      { type: 'h2', text: '7. Image' },
      { type: 'p', html: 'We check it and get an image with red triangles. Take out the MUT-III, connect it, and in the main menu, change the vehicle’s model year to 2017—the surround view system menu will appear. Navigate to it, go to Special Functions, and initialize. Turn off the computer. Start the vehicle. View the image:' },
      { type: 'image', src: '/assets/posts/multi-around-monitor/21.jpg', alt: 'Image from the front and left cameras on first startup', caption: 'Image from the front and left cameras on first startup', width: 1600, height: 1200 },
      { type: 'p', html: 'It works, but there’s a catch. The module came from a left-hand-drive car, and so does the configuration file. Because of this, the image from the left camera is slightly rotated, and the door line isn’t parallel to the parking line.<br>In this case, there are two solutions: calibrate the cameras in a lab using calibration mats, or download the configuration from the camera control unit of a right-hand-drive car with a J-15 or J-16 multimedia. Such a car will have the 282 unit installed. The next version of the unit will output an image with a different aspect ratio, since it needs to be displayed on sda8.' },
      { type: 'p', html: 'And this is where the power of the community is felt more than ever—people are willing to help each other for nothing more than a word of thanks. I messaged a GG3W owner, and they gladly agreed to help. In a matter of minutes, the configuration was copied from their unit to mine, also via MUT-III.' },
      { type: 'image', src: '/assets/posts/multi-around-monitor/22.jpg', alt: 'Image with the configuration from a right-hand-drive car', caption: 'Image with the configuration from a right-hand-drive car', width: 1600, height: 1200 },
      { type: 'p', html: 'Project complete—thanks for reading )' },
    ],
  },
  'automatic-driver-window-control': {
    title: 'Automatic windows for the driver',
    excerpt: 'It’s so frustrating when you turn off the car, get out, start locking it up, and realize the passenger windows are still open because, for some reason, no one ever closes them! I…',
    content: [
      { type: 'p', html: 'It’s so frustrating when you turn off the car, get out, start locking it up, and realize the passenger windows are still open because, for some reason, no one ever closes them!<br>I need to install automatic window regulators so I don’t have to hold down the buttons and program the power to stay on after the car is turned off.<br>For right-hand drive vehicles, the following modules will work: from the Outlander <b><b>8608A416</b></b>, <b>8608A428</b>, <b><b>8608A562</b></b>, <b>8608A564</b>; from the Eclipse Cross: <b>8608A449</b>, <b>8608A533</b>, <b>8608A572</b>, <b>8608A576</b>. I don’t recommend using modules designed for left-hand drive vehicles. It will be frustrating that the driver’s and front passenger’s window control buttons are swapped; or, if you rewire them to be in the correct positions, the front passenger’s window will stop working when operated from the passenger door.<br>You’ll also need an updated connector to replace the current F-14 connector; you can find it on AliExpress. Some people replace the entire door wiring harness—I don’t see the point.<br>I got a control module from a brand-new Eclipse Cross (part number <b>8608A576</b>)' },
      { type: 'image', src: '/assets/posts/automatic-driver-window-control/01.jpg', alt: 'The window control module with part number — Mitsubishi Outlander PHEV. Parts in the photo: 0543011', caption: 'The window control module with part number', width: 1600, height: 1200 },
      { type: 'p', html: 'To get the new module working, you need to route the LIN signal from pin 21 of connector C-417 (located in the ETACS) to the door wiring (pin 18 of connector C-210). But you don’t need to run wires all the way across the dashboard—fortunately, it connects to the wiper control stalk (pin 3 of connector C-313). That’s where you’ll need to make the connection.<br>I did this while disassembling the interior to <a href="/posts/my16-shifter">replace the shifter</a>.' },
      { type: 'image', src: '/assets/posts/automatic-driver-window-control/02.jpg', alt: 'Here’s the one', caption: 'Here’s the one', width: 1600, height: 1200 },
      { type: 'p', html: 'The green wire—don’t mix it up.' },
      { type: 'image', src: '/assets/posts/automatic-driver-window-control/03.jpg', alt: 'Connect it and route the wire through the flexible conduit to the door wiring connector', caption: 'Connect it and route the wire through the flexible conduit to the door wiring connector', width: 1600, height: 1200 },
      { type: 'p', html: 'And here’s a pleasant surprise! On the C-210 connector’s mating side, there’s an unused wire running from the window regulator module connector to pin 8. We’ll reroute it to pin 18, as shown in the wiring diagram, so that a future owner—or I, after a knock on the head—won’t be left baffled. Although there’s already plenty to be surprised by )' },
      { type: 'p', html: 'Now remove the door panel and set it aside so you can replace the connector. I’ve added to the diagram which wire from the old connector goes where in the new one; we no longer need connector F-13.' },
      { type: 'image', src: '/assets/posts/automatic-driver-window-control/04.jpg', alt: 'What goes where', caption: 'What goes where', width: 1600, height: 1200 },
      { type: 'p', html: 'The wires are significantly thicker than the holes for them in the connector, so strip the insulation down to the connector and slip them into heat-shrink tubing—it’s thinner. Insulate the 5 unused wires and tie them to the wiring harness. They’re no longer needed.' },
      { type: 'image', src: '/assets/posts/automatic-driver-window-control/05.jpg', alt: 'Side A', caption: 'Side A', width: 1600, height: 1241 },
      { type: 'image', src: '/assets/posts/automatic-driver-window-control/06.jpg', alt: 'Side B', caption: 'Side B', width: 1600, height: 1200 },
      { type: 'p', html: 'Connect the unit and check that everything works. Reinstall the door panel, making sure to replace the unit.' },
      { type: 'image', src: '/assets/posts/automatic-driver-window-control/07.jpg', alt: 'The new unit is in place.', caption: 'The new unit is in place.', width: 1600, height: 1200 },
      { type: 'p', html: 'Program the unit: lower each window all the way and hold the button fully pressed for a second; raise each window all the way and hold the button fully pulled up for a second.' },
      { type: 'p', html: 'To maintain power to the power window unit for 30 seconds after the car is turned off, set the ETACS Power Window Type function to Type P4.' },
      { type: 'p', html: 'I decided not to change the buttons for everyone else, to spare their nerves and mine. They can keep holding them.' },
      { type: 'p', html: 'P.S.: I’ve come across a series of posts on this same topic where the programming of the unit failed. In the latest post, it was suggested that the problem stems from the ETACS unit. It’s very likely that nothing would have worked for me either if I hadn’t <a href="/posts/bsw-0-1-etacs-replacement">replaced the ETACS</a> with a “modern” one (from 2020) while preparing to install the BSW system. Meanwhile, automatic windows only appeared on Outlanders in 2019, with the third facelift of the third generation.<br>It’s likely that the Eclipse requires an ETACS MY19+ unit, specifically <b>8637B474</b> or newer. Empirical testing has shown that when the window control module is disconnected for an extended period, the settings are retained and are only reset when the vehicle’s power is completely disconnected from the battery. This means they are stored in the ETACS. Keep this in mind if you plan to install one yourself.' },
    ],
  },
  'suspension-noises-stabilizer-links-and-tie-rod-ends-replacement': {
    title: 'Rattling bones. Replacing the stabilizer links and tie rod ends.',
    excerpt: 'During a 1,000+ km trip, part of the route consisted of a 70 km stretch of unpaved road. It was precisely while driving over potholes that a distinct knocking sound in the front…',
    content: [
      { type: 'p', html: 'During a 1,000+ km trip, part of the route consisted of a 70 km stretch of unpaved road. It was precisely while driving over potholes that a distinct knocking sound in the front suspension became apparent. The very next day after returning, I washed the car and took it to the nearest service center’s lift—the left stabilizer link and the right tie rod end needed replacing. I read about Iznosanet, but it didn’t inspire confidence. I went with CTR, just like I’ve done for all my cars before. I hope they haven’t gone bad.<br>We pulled into a good person’s garage and lifted the car. We propped it up on jack stands and removed the front wheels to take the load off the stabilizer bar and avoid straining our arms.' },
      { type: 'image', src: '/assets/posts/suspension-noises-stabilizer-links-and-tie-rod-ends-replacement/01.jpg', alt: 'Let’s get to work!', caption: 'Let’s get to work!', width: 1600, height: 1200 },
      { type: 'p', html: '<del>We unscrew the stabilizer links and replace them</del>. Yeah, right! Everything was seized up and rusted solid. We grabbed a rotary tool and got to work cutting.' },
      { type: 'image', src: '/assets/posts/suspension-noises-stabilizer-links-and-tie-rod-ends-replacement/02.jpg', alt: 'This is how badly we had to butcher the old parts.', caption: 'This is how badly we had to butcher the old parts.', width: 1600, height: 1200 },
      { type: 'image', src: '/assets/posts/suspension-noises-stabilizer-links-and-tie-rod-ends-replacement/03.jpg', alt: 'Close-up of the part numbers — Mitsubishi Outlander PHEV. Parts in the photo: CE0435, CE0436, CL0393', caption: 'Close-up of the part numbers', width: 1600, height: 1200 },
      { type: 'image', src: '/assets/posts/suspension-noises-stabilizer-links-and-tie-rod-ends-replacement/04.jpg', alt: 'Tighten the nuts to the torque specified in the manual', caption: 'Tighten the nuts to the torque specified in the manual', width: 1600, height: 1200 },
      { type: 'p', html: 'Job done—now it’s time for wheel alignment, since that online “life hack” about the number of turns when replacing tie rod ends doesn’t work.' },
      { type: 'image', src: '/assets/posts/suspension-noises-stabilizer-links-and-tie-rod-ends-replacement/05.jpg', alt: 'Alignment technician Andrei at work', caption: 'Alignment technician Andrei at work', width: 1600, height: 1200 },
      { type: 'p', html: 'All done! The knocking is gone, and the steering wheel is straight!' },
    ],
  },
  'auto-dimming-mirror': {
    title: 'Electrochromic mirror. Just in passing.',
    excerpt: 'I had a short 1,100-km trip ahead of me. I’d have to drive back late in the evening, into the night, on the highway. Why not quickly make this simple and useful upgrade? I decided…',
    content: [
      { type: 'p', html: 'I had a short 1,100-km trip ahead of me. I’d have to drive back late in the evening, into the night, on the highway. Why not quickly make this simple and useful upgrade? I decided to install the simplest, cheapest, fully automatic mirror <b><b>7630A058</b></b>.<br>To connect it, I’ll use a VH3.96 3-pin connector for 15 rubles from any radio parts store. I’ll need to trim off the tab from the connector housing. Or I could order the “original” black 7-pin version from AliExpress for 100 rubles + shipping + wait time. I don’t have a cable channel for the mirror wiring, so I made a patch cord out of a single-color black wire and ran it through the lidar housing. I placed the connector behind the dome light. Just a reminder: 1 is 12+, 2 is GRD, and 3 is reverse. On to the pictures!' },
      { type: 'image', src: '/assets/posts/auto-dimming-mirror/01.jpg', alt: 'Wiring in the pillar', caption: 'Wiring in the pillar', width: 1600, height: 1200 },
      { type: 'image', src: '/assets/posts/auto-dimming-mirror/02.jpg', alt: 'C-223 connector', caption: 'C-223 connector', width: 1600, height: 1200 },
      { type: 'image', src: '/assets/posts/auto-dimming-mirror/03.jpg', alt: 'The ground wire with a terminal went to the passenger footwell.', caption: 'The ground wire with a terminal went to the passenger footwell.', width: 1600, height: 1200 },
      { type: 'image', src: '/assets/posts/auto-dimming-mirror/04.jpg', alt: 'Done', caption: 'Done', width: 1600, height: 1200 },
    ],
  },
  'my16-shifter': {
    title: 'MY16 shifter. First attempt. Not a bug, a feature.',
    excerpt: 'I got my hands on a shifter from a second-facelift PHEV. The current and new shifters have completely different wiring. “Why the hell would I need that?” I thought at the…',
    content: [
      { type: 'p', html: 'I got my hands on a shifter from a second-facelift PHEV. The current and new shifters have completely different wiring.<br>“Why the hell would I need that?” I thought at the time.<br>A beat-up shifter with a cracked knob for next to nothing? Sure, bring it on!—I said just now.<br>So here we have a shifter from the MY16, covered in some sticky, brown stuff (it’s got to be unagi sauce, though it’s most likely coffee), and it even has a cracked knob.<br>To install it in a pre-facelift car, I need to solve three problems:<br>1. Pin the SAVE and CHARGE button connectors into a single connector.<br>2. Figure out how to get the mode backlight working.<br>3. Do something about the knob.' },
      { type: 'h2', text: 'Preparing the Adapter' },
      { type: 'p', html: 'I didn’t want to modify the original wiring in this case. I decided to use the wire pigtail from the “new” shifter and make an adapter patch cord. I found the appropriate connectors on AliExpress: one for the SAVE button, one for the CHARGE button, and a 6-pin connector for a separate connection to the mode backlight section.<br>In the old shifter, the button backlight pins were in every connector; now, it’s enough to route them to just one connector of your choice. I decided to take the signal from the CHARGE connector simply because the pins on that connector were easier to crimp. Special thanks to a friend from the Outlander PHEV owners’ chat for the correct wiring diagram for the second-facelift shifter unit, which turned out to be quite a challenge to find—he, coincidentally, was tackling the same problem but using a different approach.' },
      { type: 'image', src: '/assets/posts/my16-shifter/01.jpg', alt: 'PHEV MY16 Shifter Wiring Diagram', caption: 'PHEV MY16 Shifter Wiring Diagram', width: 1460, height: 1600 },
      { type: 'image', src: '/assets/posts/my16-shifter/02.jpg', alt: 'Finished patch cord', caption: 'Finished patch cord', width: 1600, height: 1200 },
      { type: 'image', src: '/assets/posts/my16-shifter/03.jpg', alt: 'The finished product', caption: 'The finished product', width: 1600, height: 1200 },
      { type: 'h2', text: 'CAN box' },
      { type: 'p', html: 'There are two ways to get the backlight working: 1. Replace the PHEV-ECU—it’s expensive and nearly impossible to find, 2. Build a CAN box that will detect the mode selected by the shifter via the bus and send a signal to the corresponding pins on the C-248 connector.<br>I’m going with the second option and buying the same kit as <a href="/posts/old-fcm-new-meter">I did for the instrument cluster CAN box</a>: an Arduino Nano, an MCP2515 CAN bus module, an LM2596 voltage regulator, and a 200mA fuse. I also decided that the CAN box would have two connectors: a 4-pin connector—12+, CanH, CanL, GND—and a 6-pin connector—12+, R, N, D, B, GND. I’m printing the enclosure the same way as last time.<br>I’m assembling the CAN box according to the following schematic:' },
      { type: 'image', src: '/assets/posts/my16-shifter/04.jpg', alt: 'CAN box Schematic', caption: 'CAN box Schematic', width: 1600, height: 792 },
      { type: 'image', src: '/assets/posts/my16-shifter/05.jpg', alt: 'CAN box during assembly', caption: 'CAN box during assembly', width: 1600, height: 1200 },
      { type: 'p', html: 'A huge thank you to another friend from the Outlander PHEV owners’ chat for providing information on which IDs and data on the CAN bus correspond to mode switching, for help in determining the direction of travel, and for the guidance! Now that we have everything we need, let’s write a sketch for the Arduino:' },
      {
        type: 'code',
        text: `#include "mcp_can.h"
#include "mcp_can_dfs.h"
#include <SPI.h>

#define CAN_CS_PIN 10

// MOSFET pins (active LOW)
const int mosfetPins[4] = {2, 3, 4, 5}; // R, N, D, B

MCP_CAN CAN(CAN_CS_PIN);
int shiftPosition = 0;

void setup() {
  Serial.begin(115200);

  // CAN initialization
  while (CAN_OK != CAN.begin(CAN_500KBPS, MCP_8MHz)) {
    Serial.println("CAN init fail, retry…");
    delay(100);
  }
  Serial.println("CAN init ok!");
}

void loop() {
  unsigned char len = 0;
  unsigned char buf[8];

  if (CAN_MSGAVAIL == CAN.checkReceive()) {
    CAN.readMsgBuf(&len, buf);
    unsigned long canId = CAN.getCanId();

    if (canId == 0x418) {
      switch (buf[0]) {
        case 0x52: shiftPosition = 1; break; // R
        case 0x4E: shiftPosition = 2; break; // N
        case 0x44: shiftPosition = 3; break; // D
        case 0x88: case 0x89: case 0x8A: case 0x8B: case 0x8C: case 0x8D:
          shiftPosition = 4; break; // B
        default: shiftPosition = 0; break;
      }

      updateMosfets();

      Serial.print("Position: ");
      Serial.println(shiftPosition);
    }
  }
}

void updateMosfets() {
  // First, set all pins to INPUT (high impedance)
  for (int i = 0; i < 4; i++) {
    pinMode(mosfetPins[i], INPUT);
  }

  // Set only the active pin to OUTPUT and drive it LOW
  if (shiftPosition >= 1 && shiftPosition <= 4) {
    pinMode(mosfetPins[shiftPosition - 1], OUTPUT);
    digitalWrite(mosfetPins[shiftPosition - 1], LOW);
  }
}`,
      },
      { type: 'p', html: 'Upload the sketch, then set the CAN box aside on a shelf until installation.' },
      { type: 'h2', text: 'Knob' },
      { type: 'p', html: 'The knob from the “old” shifter is intact but has a label with the mode-switching diagram drawn on it; the knob from the “new” shifter has a crack and the standard “Outlander PHEV” label. We put the knobs in the oven and heat them to 80 °C. Using a utility knife and a valve adjustment tool, we pry up the nameplates, and they come off easily. They were held in place with tape. We swap the nameplates, then attach them with silicone tape.' },
      { type: 'image', src: '/assets/posts/my16-shifter/06.jpg', alt: 'Knob', caption: 'Knob', width: 1600, height: 1200 },
      { type: 'h2', text: 'Disassembly/Assembly' },
      { type: 'p', html: 'There are plenty of videos and articles on disassembling the center console; I won’t go into detail here—I’ll just show the necessary steps for disassembly.' },
      { type: 'image', src: '/assets/posts/my16-shifter/07.jpg', alt: 'Old shifter', caption: 'Old shifter', width: 1600, height: 1200 },
      { type: 'image', src: '/assets/posts/my16-shifter/08.jpg', alt: 'Necessary Level of Interior Disassembly', caption: 'Necessary Level of Interior Disassembly', width: 1600, height: 1200 },
      { type: 'p', html: 'Drill an oval hole in the right rear leg of the shifter bracket using a 7 mm drill bit to accommodate the clip that will hold the CAN box. There’s plenty of room there, but I was limited by the length of the patch cord and wanted to position it so I could connect to the Arduino without having to disassemble the console again (through the plug under the handbrake lever). We’ll get power for the CAN box from the cigarette lighter, whose wiring runs very conveniently under the console, and the bus from the C-34 connector behind the instrument cluster (top row—CANH, bottom row—CANL).' },
      { type: 'image', src: '/assets/posts/my16-shifter/09.jpg', alt: 'CAN box Placement', caption: 'CAN box Placement', width: 1600, height: 1200 },
      { type: 'h2', text: 'Conclusion' },
      { type: 'p', html: 'We put everything back together. We start the car, and here’s a surprise! With the instrument cluster lights off, all modes on the shifter are lit at half brightness; when a mode is selected, the corresponding indicator lights up at full brightness. The Arduino cannot ensure a complete absence of a signal from the outputs in use.' },
      { type: 'image', src: '/assets/posts/my16-shifter/10.jpg', alt: 'During the day in Park', caption: 'During the day in Park', width: 1600, height: 1200 },
      { type: 'image', src: '/assets/posts/my16-shifter/11.jpg', alt: 'During the day with a mode selected', caption: 'During the day with a mode selected', width: 1600, height: 1200 },
      { type: 'image', src: '/assets/posts/my16-shifter/12.jpg', alt: 'At night in Park', caption: 'At night in Park', width: 1600, height: 1200 },
      { type: 'image', src: '/assets/posts/my16-shifter/13.jpg', alt: 'At night with a mode selected', caption: 'At night with a mode selected', width: 1600, height: 1200 },
      { type: 'p', html: 'Further investigation revealed that to resolve this inconsistency in the backlight’s operation, you can use an analog multiplexer such as the CD4066 or an equivalent.' },
      { type: 'p', html: 'Although my friends pointed out: “That way, the possible options light up! It’s not a bug—it’s a feature!”' },
    ],
  },
  'speed-limiter-button': {
    title: 'Speed Limiter. The last blank.',
    excerpt: 'I couldn’t stop thinking about the last button blank.',
    content: [
      { type: 'p', html: 'I couldn’t stop thinking about the last button blank.' },
      { type: 'image', src: '/assets/posts/speed-limiter-button/01.jpg', alt: 'The steering wheel is sad because it lacks a speed limiter function', caption: 'The steering wheel is sad because it lacks a speed limiter function', width: 1600, height: 1200 },
      { type: 'p', html: 'And yet you know the feature exists—the Europeans got it, but the Japanese supposedly don’t need it. We’ve got to make it work!' },
      { type: 'p', html: 'We put out a call, found a button module from a European car that has everything needed for the job—it’ll be the donor.' },
      { type: 'image', src: '/assets/posts/speed-limiter-button/02.jpg', alt: 'The donor unit and the recipient unit are on the table.', caption: 'The donor unit and the recipient unit are on the table.', width: 1600, height: 1200 },
      { type: 'p', html: 'Let’s open up the modules and take a look: we’re missing a 10 kΩ resistor and an LED for the button backlight—let’s desolder them. The circuit boards will, of course, be identical. The LEDs are very delicate, and their casings melt easily when exposed to high temperatures. It’s a good thing we have four attempts.' },
      { type: 'image', src: '/assets/posts/speed-limiter-button/03.jpg', alt: 'Disassembly and Comparison', caption: 'Disassembly and Comparison', width: 1600, height: 1200 },
      { type: 'image', src: '/assets/posts/speed-limiter-button/04.jpg', alt: 'Result', caption: 'Result', width: 1600, height: 1200 },
      { type: 'p', html: 'We put everything back together, making sure to transfer the button from the donor unit’s housing after removing the blanking plug from the target unit. We install it in the car. Now we have a useless glowing button ))' },
      { type: 'image', src: '/assets/posts/speed-limiter-button/05.jpg', alt: 'Button panel in place', caption: 'Button panel in place', width: 1600, height: 1200 },
      { type: 'p', html: 'All that’s left is to activate the “Speed Limit Function — Present” setting in the Phev-Ecu coding.' },
      { type: 'image', src: '/assets/posts/speed-limiter-button/06.jpg', alt: 'The system in action.', caption: 'The system in action.', width: 1600, height: 1200 },
      { type: 'p', html: 'Obey the speed limit, but don’t forget about safety!' },
    ],
  },
  'old-fcm-new-meter': {
    title: 'The old FCM and the new instrument cluster',
    excerpt: 'My late-night trip to the car ended in disappointment: when I press the FCM button, I hear a beep, but nothing appears on the screen. Just to remind you, I have a 2017 instrument…',
    content: [
      { type: 'p', html: 'My late-night trip to the car ended in disappointment: when I press the FCM button, I hear a beep, but nothing appears on the screen. Just to remind you, I have a 2017 instrument cluster. The only way to find out what mode the system is currently in is through the data list in MUT—which is completely useless.' },
      { type: 'image', src: '/assets/images/old-fcm-new-meter/01.jpg', alt: 'MUT—Informative, but impractical.', caption: 'MUT—Informative, but impractical.', width: 1600, height: 1200 },
      { type: 'p', html: 'A solution was found fairly quickly in the form of an additional Arduino-based CAN signal conversion module. The sketch will be as follows:' },
      {
        type: 'code',
        text: `#include <SPI.h>
#include <mcp_can.h>

#define CAN_CS_PIN 10
MCP_CAN CAN(CAN_CS_PIN);

unsigned long rxId;
unsigned char len = 0;
unsigned char rxBuf[8];
unsigned long timer = 0;
float z = 0.0;

void setup() {
  if (CAN.begin(MCP_ANY, CAN_500KBPS, MCP_8MHZ) != CAN_OK) {
    while (1);
  }

  pinMode(2, INPUT);

  unsigned char stmp[8] = {0};
  CAN.sendMsgBuf(0x22e, 0, 8, stmp);
}

void loop() {
  if (millis() - timer > 100) {
    timer = millis();

    unsigned char stmp[8] = {0};
    stmp[0] = (unsigned char)z;

    CAN.sendMsgBuf(0x22e, 0, 8, stmp);
  }

  if (!digitalRead(2)) {
    if (CAN_MSGAVAIL == CAN.checkReceive()) {
      CAN.readMsgBuf(&rxId, &len, rxBuf);

      if (rxId == 0x22b) {
        z = rxBuf[3];
      }
    }
  }
}`,
      },
      { type: 'p', html: 'I bought all the ingredients from the recipe and started sculpting, in FreeCAD, the pot it would all cook in. I used an Arduino Nano + MCP2515 enclosure as the base. The voltage converter fit perfectly inside it.' },
      { type: 'image', src: '/assets/posts/old-fcm-new-meter/02.jpg', alt: 'General view of the CAN adapter enclosure', caption: 'General view of the CAN adapter enclosure', width: 1600, height: 898 },
      { type: 'image', src: '/assets/posts/old-fcm-new-meter/03.jpg', alt: 'Inside view of the CAN adapter enclosure showing component placement', caption: 'Inside view of the CAN adapter enclosure showing component placement', width: 1600, height: 892 },
      { type: 'p', html: 'The case was 3D-printed. The components were ordered from Ozon.' },
      { type: 'image', src: '/assets/posts/old-fcm-new-meter/04.jpg', alt: 'Assembly process', caption: 'Assembly process', width: 1600, height: 1200 },
      { type: 'p', html: 'The fuse holder comes from a Toyota Fielder (it’s what I had), and the power connector is from my old stash. The end result is this stick of dynamite:' },
      { type: 'image', src: '/assets/posts/old-fcm-new-meter/05.jpg', alt: 'The CAN adapter is ready for installation', caption: 'The CAN adapter is ready for installation', width: 1600, height: 1200 },
      { type: 'p', html: 'It’s mounted behind the instrument cluster. CAN is taken from the C-34 connector; CANH is any pin in the top row; CANL is any pin in the bottom row. Power and ground come from the instrument cluster connector. The Arduino sketch was uploaded to the already-assembled device.' },
      { type: 'image', src: '/assets/posts/old-fcm-new-meter/06.jpg', alt: 'The unit is installed and hangs on a clip behind the instrument cluster.', caption: 'The unit is installed and hangs on a clip behind the instrument cluster.', width: 1600, height: 1200 },
      { type: 'p', html: 'After installing the unit, go to the FCM 2 function in the ETACS coding menu and change the value to “Present.”' },
      { type: 'image', src: '/assets/posts/old-fcm-new-meter/07.jpg', alt: 'Done!', caption: 'Done!', width: 1600, height: 1200 },
      { type: 'p', html: 'The instrument cluster displays all the necessary information on the screen, and most importantly, a warning that it’s time to brake!' },
    ],
  },
  'bsw-0-5-meter-final': {
    title: 'BSW: Step #0. Part Five. Instrument Clusters. The Finale.',
    excerpt: 'Unexpected, isn’t it? We’re back to the beginning again ) But the problem was there from the start. All my tinkering with the instrument clusters—modifying the B903, reviving the…',
    content: [
      { type: 'p', html: 'Unexpected, isn’t it? We’re back to the beginning again ) But the problem was there from the start. All my tinkering with the instrument clusters—modifying the B903, reviving the donor C453, and working on yet another C453—were in vain and didn’t help me complete the project, but they did provide invaluable experience, new skills, and some very useful connections! The B903 panel, with all its modifications, didn’t even hint that it knew what BSW was. The C453 threw an error: it said, “I know what it is, but I don’t know how to work with implementations on 2017 sonars.” And that’s because there was an implementation on parking sensors specifically in 2015–2016. And, likely, in such a CAN-based implementation, the modules communicate differently with the instrument cluster.<br>What to do? We take the 2017 British version of the instrument cluster (8100C544)—which nobody wants—in a beat-up case with broken mounts. We plug it in and… OH, MIRACLE! Everything works! The coveted icon lit up, and no errors!' },
      { type: 'image', src: '/assets/posts/bsw-0-5-meter-final/01.jpg', alt: 'Connecting the 8100C544', caption: 'Connecting the 8100C544', width: 1600, height: 1200 },
      { type: 'p', html: 'By now it’s routine: we take the instrument cluster apart, program the EEPROM, and swap out the mask for a Japanese one from the C453 (I now have more of those than I know what to do with). And here it is—the final version with a working BSW! As a bonus, by the way, there’s new graphics for open doors and energy flow.' },
      { type: 'image', src: '/assets/posts/bsw-0-5-meter-final/02.jpg', alt: 'The final version of the instrument cluster.', caption: 'The final version of the instrument cluster.', width: 1600, height: 1200 },
      { type: 'p', html: 'So that’s the long story behind installing the blind-spot monitoring system on a pre-facelift right-hand-drive Mitsubishi Outlander hybrid. Thanks to everyone who was involved, everyone who responded, and those who simply offered moral support!' },
      { type: 'image', src: '/assets/posts/bsw-0-5-meter-final/03.jpg', alt: 'The system in action.', caption: 'The system in action.', width: 1600, height: 1200 },
      { type: 'p', html: 'Teaser for the next post: But then, at 11:30 p.m., a clearly expert-level question popped up in the chat asking how I switch FCM modes. At 1 a.m., I went to check it out :/' },
    ],
  },
  'bsw-3-installation': {
    title: 'BSW: Step #3. Installation.',
    excerpt: 'Installing the system—including mounting the sonars and running the wiring through the bumper, doors, and dashboard—took two days, about six hours each, at a leisurely pace. Plus…',
    content: [
      { type: 'p', html: 'Installing the system—including mounting the sonars and running the wiring through the bumper, doors, and dashboard—took two days, about six hours each, at a leisurely pace. Plus, a couple of days later, the gateway was installed in a couple of hours. A lot has been written about how to install BSW. I’ll only describe the issues I encountered because I have a divine pre-facelift model.<br>1. <b>Mounting studs.</b> Of course, I didn’t have any studs. We’ll use stainless steel threaded rivets secured with body sealant. The covers are mounted with stainless steel hex screws.' },
      { type: 'image', src: '/assets/posts/bsw-3-installation/01.jpg', alt: 'Marking the mounting holes', caption: 'Marking the mounting holes', width: 1600, height: 1200 },
      { type: 'image', src: '/assets/posts/bsw-3-installation/02.jpg', alt: 'Threaded rivets in place on the left', caption: 'Threaded rivets in place on the left', width: 1600, height: 1200 },
      { type: 'image', src: '/assets/posts/bsw-3-installation/03.jpg', alt: 'Threaded rivets in place on the right', caption: 'Threaded rivets in place on the right', width: 1600, height: 1200 },
      { type: 'image', src: '/assets/posts/bsw-3-installation/04.jpg', alt: 'BSW in its rightful place — Mitsubishi Outlander PHEV. Parts in the photo: 8638A469, 0314016', caption: 'BSW in its rightful place', width: 1600, height: 1200 },
      { type: 'image', src: '/assets/posts/bsw-3-installation/05.jpg', alt: 'View of the mounting from the inside.', caption: 'View of the mounting from the inside.', width: 1600, height: 1200 },
      { type: 'p', html: '2. <b>Bumper wiring.</b> For a facelift car built for the European market, the wiring harness would have been a bolt-on fit, but our situation is different. The G-18 connector, which powers the reverse lights, had been replaced with a G-32—the parking sensor signal connector. I took a couple of wires of the right color from there to power the reverse lights. I coiled the remaining parking sensor wires from the harness—which run to the G-20 bumper wiring connector in the trunk—into a loop and left them under the bumper. The aforementioned G-20 connector in the new wiring harness is now a 22-pin connector, whereas mine was 18-pin. Earlier, in <a href="/posts/bsw-1-parts-procurement">a post about purchasing BSW equipment</a>, I noted that four wires come from the trunk into the C-25 connector. These also turned out to be parking sensor signal wires. I’ll be using the stock floor wiring; given that I already have a rearview camera and RCTA, I consider parking sensors unnecessary and don’t plan to install them.<br>Accordingly, I decided to repin the G-20 connector to an 18-pin configuration using a connector from the old bumper wiring harness. The updated G-20 connector now houses the reverse power wires, the beeper power wire, the KOS tailgate antenna power wire, as well as the indicator power and CAN wires from the green BSW G-36 connector. Only the BSW power and ground wires remain in the G-36 connector.<br>Power was taken from the tailgate motor (pin 5 of connector D-10).' },
      { type: 'image', src: '/assets/posts/bsw-3-installation/06.jpg', alt: 'The stock floor wiring and the new bumper wiring are not compatible.', caption: 'The stock floor wiring and the new bumper wiring are not compatible.', width: 1600, height: 1200 },
      { type: 'image', src: '/assets/posts/bsw-3-installation/07.jpg', alt: 'The 18-pin G-20 connector from the floor wiring harness. Don’t expect to find a green G-36 connector in the pre-facelift model. — Mitsubishi Outlander PHEV. Parts in the photo: G2018', caption: 'The 18-pin G-20 connector from the floor wiring harness. Don’t expect to find a green G-36 connector in the pre-facelift model.', width: 1600, height: 1200 },
      { type: 'image', src: '/assets/posts/bsw-3-installation/08.jpg', alt: 'The bumper wiring is connected.', caption: 'The bumper wiring is connected.', width: 1600, height: 1200 },
      { type: 'p', html: '3. <b>Wiring for the door indicators.</b> Since we’re using <a href="/posts/bsw-2-indicators">indicators from the Nissan X-Trail/Qashqai</a>, we’re ordering mating connectors so as not to damage the factory indicators and to allow for easy replacement if necessary. We remove the flexible conduit from the body and run the wires from pin 11 of connectors C-210 and C-222, with the indicator connector already attached at the end. I didn’t connect them to the mirror connectors; I just took the ground from them.' },
      { type: 'image', src: '/assets/posts/bsw-3-installation/09.jpg', alt: 'The process of routing the indicator’s power wire into the door.', caption: 'The process of routing the indicator’s power wire into the door.', width: 1600, height: 1200 },
      { type: 'p', html: '4. <b>Dashboard wiring.</b> Everything is the same as usual, with one small exception. For those with right-hand drive, make your life easier and take the CAN signal not from the ill-fated C-27, <b>but from C-34</b> behind the instrument cluster. Everything else for the C-49 gateway connector and the C-45 button connector was taken from the C-205 climate control connector. The gateway was placed where the CAN box used to be, which was removed from the car along with the old multimedia. I see no point in twisting it upside down and fitting it into the dashboard from behind.' },
      { type: 'image', src: '/assets/posts/bsw-3-installation/10.jpg', alt: 'Gateway in place', caption: 'Gateway in place', width: 1600, height: 1200 },
      { type: 'image', src: '/assets/posts/bsw-3-installation/11.jpg', alt: 'The button took the place of the blanking plug covering the parking sensor button', caption: 'The button took the place of the blanking plug covering the parking sensor button', width: 1600, height: 1200 },
      { type: 'p', html: '5. <b>Activation and another snag.</b> After enabling all the necessary settings in ETACS, an error appears on the instrument cluster screen: “BSW system malfunction.” The system is fully functional, but the error remains on the cluster, and the BSW on/off icon does not light up. The only way to tell whether the system was on or off by pressing the button was to wait for a car to pass you.' },
      { type: 'image', src: '/assets/posts/bsw-3-installation/12.jpg', alt: 'Error.', caption: 'Error.', width: 1600, height: 1200 },
      { type: 'p', html: 'Everyone I spoke with had their own theories: ETACS, CAN, a short circuit in the bumper wiring, faulty Nissan indicator lights. The most confusing part was error code C2322—a short circuit in the mirror indicator lights—which only appeared after testing the indicators in MUT. The irony is that the error description states it occurs when the voltage exceeds 6V while the “Blind Spot” warning light is off—that is, when there’s no signal from the BSW-ECU. The MUT itself triggers the error by lighting up the indicator when there’s no signal indicating a vehicle is in the blind spot.' },
      { type: 'p', html: 'Teaser for the next post: the CAN theory was the closest to the solution.' },
    ],
  },
  'mitsubishi-connect-timers': {
    title: 'Mitsubishi Connect Timers',
    excerpt: 'After replacing the multimedia, I ran into an issue with scheduling the climate control. It just says I can’t change the settings—that’s it. It turned out the problem was the old…',
    content: [
      { type: 'p', html: 'After replacing the multimedia, I ran into an issue with scheduling the climate control. It just says I can’t change the settings—that’s it. It turned out the problem was the old remote control unit (EV Remote), which doesn’t work with the new multimedia. I had to figure it out :/' },
      { type: 'image', src: '/assets/posts/mitsubishi-connect-timers/01.jpg', alt: 'Multimedia Error Message', caption: 'Multimedia Error Message', width: 1600, height: 1200 },
      { type: 'p', html: 'I ended up with a unit that had a broken bracket but was fully functional. The part number of the updated unit is 8637C121.' },
      { type: 'image', src: '/assets/posts/mitsubishi-connect-timers/02.jpg', alt: 'New unit — Mitsubishi Outlander PHEV. Parts in the photo: K9499, K8637, SS2015', caption: 'New unit', width: 1600, height: 1200 },
      { type: 'p', html: 'The unit I received had a broken bracket, but the case comes apart—it’s held by latches—and matches the old one perfectly.' },
      { type: 'image', src: '/assets/posts/mitsubishi-connect-timers/03.jpg', alt: 'Old unit — Mitsubishi Outlander PHEV. Parts in the photo: 8637B110', caption: 'Old unit', width: 1600, height: 1200 },
      { type: 'p', html: 'I didn’t even bother removing the old unit. I took it apart right there, replaced the circuit board, connected the antenna, and put the new cover back on. The timers are working!' },
      { type: 'image', src: '/assets/posts/mitsubishi-connect-timers/04.jpg', alt: 'Timer settings in the multimedia', caption: 'Timer settings in the multimedia', width: 1600, height: 1200 },
      { type: 'p', html: 'Now it’ll be warm at 7 a.m. in the winter, and by 5 p.m. in the summer the sun-baked car will be cool.' },
    ],
  },
  'bsw-0-4-meter-revival': {
    title: 'BSW: Step #0. Part Four. Instrument Clusters. Resurrection.',
    excerpt: 'The diagnosis of the 453 instrument cluster made by an instrument cluster specialist turned out to be correct. He sent me a memory chip within a couple of days. While it was on its way to me…',
    content: [
      { type: 'p', html: 'The diagnosis of the 453 instrument cluster made by an instrument cluster specialist turned out to be correct. He sent me a memory chip within a couple of days. While it was on its way to me, the old chip was desoldered.' },
      { type: 'image', src: '/assets/posts/bsw-0-4-meter-revival/01.jpg', alt: 'The old 453 instrument cluster memory chip.', caption: 'The old 453 instrument cluster memory chip.', width: 1600, height: 1200 },
      { type: 'p', html: 'A couple more days later, the chip arrived, and I installed it the very next day.' },
      { type: 'image', src: '/assets/posts/bsw-0-4-meter-revival/02.jpg', alt: 'The new chip from the 903 instrument cluster. As they say, judge the quality of the soldering for yourself )))', caption: 'The new chip from the 903 instrument cluster. As they say, judge the quality of the soldering for yourself )))', width: 1600, height: 1200 },
      { type: 'p', html: 'We hooked it up, and I went to “close the hatch and the fuel tank filler cap” ))' },
      { type: 'image', src: '/assets/posts/bsw-0-4-meter-revival/03.jpg', alt: 'It’s back to life!', caption: 'It’s back to life!', width: 1600, height: 1200 },
      { type: 'p', html: 'The panel has been transformed into a 903, is fully functional, and now holds a place of honor on the shelf, just in case.' },
      { type: 'p', html: 'To wrap up this chapter, I’d like to highlight the power of the community!' },
      { type: 'p', html: 'On with the BSW install.' },
    ],
  },
  'bsw-0-3-meter-troubleshooting': {
    title: 'BSW: Step #0. Part Three. Adventures with Instrument Clusters.',
    excerpt: 'To work with the car’s control modules and update them, I wrestled a Chinese Openport and MUT-III SE into working. What could I use to test it on so that it wouldn’t be critical…',
    content: [
      { type: 'p', html: 'To work with the car’s control modules and update them, I wrestled a Chinese Openport and MUT-III SE into working. What could I use to test it on so that it wouldn’t be critical and wouldn’t brick the car if something went wrong? Well, of course, on the old ETACS on the bench. The control unit is connected on the bench again, the Openport is connected, MUT is open—SUCCESS! An update for the ETACS was found and successfully flashed!<br>Afterward, the unit was successfully recognized, and judging by the increase in the number of lines in the coding, it gained some new features. The tests went well… I think.<br>Next step: update something in the car, but nothing critical—the instrument cluster.<br>An update was found in MUT that resolves the issue with the error regarding an incorrect termination of the charging session. It always raised questions.' },
      { type: 'image', src: '/assets/posts/bsw-0-3-meter-troubleshooting/01.jpg', alt: 'I found an update in MUT. Strange—the instrument cluster is a 453, but the update is listed for a 903. — Mitsubishi Outlander PHEV. Parts in the photo: 8100B903', caption: 'I found an update in MUT. Strange—the instrument cluster is a 453, but the update is listed for a 903.', width: 1600, height: 1200 },
      { type: 'p', html: 'According to an instrument cluster specialist, the 453 and 903 instrument clusters are identical, and the only difference is in the BSW indicator LED. So, let’s update.' },
      { type: 'image', src: '/assets/posts/bsw-0-3-meter-troubleshooting/02.jpg', alt: 'Here’s what we see after installing the update. WHAT THE HECK!', caption: 'Here’s what we see after installing the update. WHAT THE HECK!', width: 1600, height: 1200 },
      { type: 'p', html: 'We decided to put the old instrument cluster—which had been sitting on a shelf—back in place and tackle the problem the next day. In the morning, we took the panel apart, hooked it up on the bench with the old ETACS unit, and tried to update it and roll back the update using various methods on a whim, since the internet offered no guidance on this matter. No success.' },
      { type: 'image', src: '/assets/posts/bsw-0-3-meter-troubleshooting/03.jpg', alt: 'Workbench', caption: 'Workbench', width: 1600, height: 1200 },
      { type: 'p', html: 'If the 903 and 453 panels are indeed identical, then the following was done: a dump was taken from the 453 panel’s EEPROM, and the BSW indicator backlight LED was desoldered. Then we disassembled the 903 panel; we dumped the EEPROM, inserted the first 5 lines—which contain the correct mileage from the 453 panel’s EEPROM dump—into it, and flashed it back into the 903; we soldered in the LED (it simply wasn’t there). We reassembled everything, wrestling with the needles along the way. I described how to do this in <a href="/posts/bsw-0-2-meter-replacement">the previous part</a>.' },
      { type: 'image', src: '/assets/posts/bsw-0-3-meter-troubleshooting/04.jpg', alt: 'We reconnect to the EEPROM via the pads, dump the data, and desolder the marked LED.', caption: 'We reconnect to the EEPROM via the pads, dump the data, and desolder the marked LED.', width: 1600, height: 1200 },
      { type: 'p', html: 'In addition to the LED, you’ll need to transfer its support components—a 750-ohm resistor and a transistor switch. Unfortunately, I couldn’t find its full marking. The component’s surface area only allowed for the “N5” marking to be placed on it.' },
      { type: 'image', src: '/assets/posts/bsw-0-3-meter-troubleshooting/05.jpg', alt: 'The support components for the BSW system on/off indicator LED: a 750-ohm resistor and a transistor switch.', caption: 'The support components for the BSW system on/off indicator LED: a 750-ohm resistor and a transistor switch.', width: 1600, height: 1200 },
      { type: 'image', src: '/assets/posts/bsw-0-3-meter-troubleshooting/06.jpg', alt: 'Here’s the switch, for anyone who wants to find and buy one rather than desolder it from a donor.', caption: 'Here’s the switch, for anyone who wants to find and buy one rather than desolder it from a donor.', width: 1600, height: 1200 },
      { type: 'p', html: 'I hope the BSW indicator will work, but we’ll find out at the end of the story. (Spoiler: it won’t work—read on.)' },
      { type: 'p', html: 'If anyone has any idea why this happened, or any comments, I’d be happy to read them and discuss them in the comments.' },
    ],
  },
  'bsw-1-parts-procurement': {
    title: 'BSW: Step #1. Purchasing.',
    excerpt: 'Finally, we get to the system itself. Literally: we just get to touch it ) The system will consist of new components.',
    content: [
      { type: 'p', html: 'Finally, we get to the system itself. Literally: we just get to touch it )<br>The system will consist of new components.' },
      { type: 'image', src: '/assets/posts/bsw-1-parts-procurement/01.jpg', alt: 'Here’s the kit that arrived, plus the interior wiring, which didn’t make it into the photo. The connectors for the gateway and buttons were easy to find on AliExpress', caption: 'Here’s the kit that arrived, plus the interior wiring, which didn’t make it into the photo. The connectors for the gateway and buttons were easy to find on AliExpress', width: 1600, height: 1200 },
      { type: 'p', html: 'The system consists of two <b>8638A469</b> sonar sensors mounted on two reflectors—<b>8639A200</b> and <b>8639A201</b>—which form the directional pattern, rear bumper wiring (<b>8510J886</b>), interior wiring from the trunk to the dashboard, the <b>8637B906</b> gateway, and the <b>8610A204</b> button.' },
      { type: 'p', html: 'We decided to use the indicators from the Nissan X-Trail/Qashqai. Ordered from Euro-Auto—they have plenty of these parts there…' },
      { type: 'image', src: '/assets/posts/bsw-1-parts-procurement/02.jpg', alt: 'BSW indicator lights from the Nissan X-Trail/Qashqai: 26675-4BA0B and 26670-4BA0B. — Mitsubishi Outlander PHEV. Parts in the photo: 266754BA0B, 266704BA0B', caption: 'BSW indicator lights from the Nissan X-Trail/Qashqai: 26675-4BA0B and 26670-4BA0B.', width: 1600, height: 1200 },
      { type: 'p', html: '<a href="/posts/bsw-0-1-etacs-replacement">While replacing the ETACS</a>, I noticed that a 4-wire harness runs from the door sill under the left kick panel to the C-25 connector—this is none other than the BSW interior wiring harness for facelifted models and the parking sensor wiring for pre-facelift models.' },
      { type: 'image', src: '/assets/posts/bsw-1-parts-procurement/03.jpg', alt: 'Parking sensor interior wiring harness and C-25 connector (10-pin)', caption: 'Parking sensor interior wiring harness and C-25 connector (10-pin)', width: 1600, height: 1200 },
    ],
  },
  'bsw-2-indicators': {
    title: 'BSW: Step #2. Indicators.',
    excerpt: 'While waiting for the last components to arrive, I decided to work on positioning the indicator lights. They’ll be installed in the mirror corner trims next to the tweeters. The…',
    content: [
      { type: 'p', html: 'While waiting for the last components to arrive, I decided to work on positioning the indicator lights. They’ll be installed in the mirror corner trims next to the tweeters. The shape of the indicator lights I chose, along with their factory mounting tabs, makes that spot the perfect fit, since there’s a cavity of just the right shape in the corner trims themselves.<br>The factory placement in the mirror is a bit of a hassle, and I don’t like it; I’m also worried that they won’t be very visible during the day. Mounting them on the end of the mirror, like in a Subaru, isn’t ideal either, since the glass there often gets dirty, and snow accumulates on the mirror hinge in winter—even though there’s plenty of room inside the mirror housing for this solution. I also don’t want to drill into the mirror housing.' },
      { type: 'image', src: '/assets/posts/bsw-2-indicators/01.jpg', alt: 'BSW indicators from the Nissan X-Trail/Qashqai: 26675-4BA0B and 26670-4BA0B. — Mitsubishi Outlander PHEV. Parts in the photo: 266754BA0B, 266704BA0B', caption: 'BSW indicators from the Nissan X-Trail/Qashqai: 26675-4BA0B and 26670-4BA0B.', width: 1600, height: 1200 },
      { type: 'p', html: 'Apply painter’s tape to the caps of the Nissan indicators and carefully cut it to precisely match the shape of the cap. This creates a template for the hole. Apply the template to the plastic where the indicator will be mounted. Press it down firmly so the tape doesn’t shift during milling. Use a utility knife to cut out the inner part, leaving 0.5–1 mm to the edge; cut out the rest with a small router bit using a rotary tool.' },
      { type: 'image', src: '/assets/posts/bsw-2-indicators/02.jpg', alt: 'Corner trim from the inside', caption: 'Corner trim from the inside', width: 1600, height: 1200 },
      { type: 'p', html: 'Mounted with hot glue, after thoroughly degreasing the surface.' },
      { type: 'image', src: '/assets/posts/bsw-2-indicators/03.jpg', alt: 'Result. Inactive indicators.', caption: 'Result. Inactive indicators.', width: 1600, height: 1200 },
      { type: 'image', src: '/assets/posts/bsw-2-indicators/04.jpg', alt: 'Result: Active indicators.', caption: 'Result: Active indicators.', width: 1600, height: 1200 },
      { type: 'image', src: '/assets/posts/bsw-2-indicators/05.jpg', alt: 'Left one in place', caption: 'Left one in place', width: 1600, height: 1200 },
      { type: 'image', src: '/assets/posts/bsw-2-indicators/06.jpg', alt: 'Right side in place', caption: 'Right side in place', width: 1600, height: 1200 },
    ],
  },
  'bsw-0-2-meter-replacement': {
    title: 'BSW: Step #0. Part Two. Replacing the instrument cluster.',
    excerpt: 'Cars manufactured before 2015 did not have the BSW option; consequently, the instrument cluster lacked an icon that could light up…',
    content: [
      { type: 'p', html: 'Cars manufactured before 2015 did not have the BSW option; consequently, the instrument cluster lacked an icon that could light up to indicate whether the system was on or off. This means you need to replace the <b>8100B903</b> instrument cluster with the panel from the second facelift model (2015–2017)—<b>8100C453</b>—when the handbrake was still a lever.<br>A 2016 instrument cluster was found.<br>I’m preparing an EEPROM dump with the correct mileage for the new panel. Let’s get started:' },
      { type: 'p', html: 'Let’s take apart the new instrument cluster. Everything is straightforward until you get to the needles. There are two ways to remove the needles.<br>1. Recommended method: Try to pry off the decorative covers and use a homemade special puller to push the axles out of the needle housing. This way, the magnet inside the needle motor won’t shift relative to the main gear, and you won’t have any problems aligning the needles during reassembly.<br>2. The practical method: Remove the rear covers from the motors, force paper clips into the holes—they’ll lock the magnets in place—and pull the needles out along with the axles. This way, there’s a chance the needles might jump around after reassembly. One of mine shifted anyway :/' },
      { type: 'p', html: 'Remove the bezel, unscrew the display, disconnect its ribbon cable, and set it aside.' },
      { type: 'image', src: '/assets/posts/bsw-0-2-meter-replacement/01.jpg', alt: 'Connect to the panel by soldering the mounting wires to the pads next to the EEPROM chip', caption: 'Connect to the panel by soldering the mounting wires to the pads next to the EEPROM chip', width: 1600, height: 1200 },
      { type: 'image', src: '/assets/posts/bsw-0-2-meter-replacement/02.jpg', alt: 'Close-up of the solder joints on the pads. You don’t need to solder the white one (pin 6). It won’t be used.', caption: 'Close-up of the solder joints on the pads. You don’t need to solder the white one (pin 6). It won’t be used.', width: 1600, height: 1034 },
      { type: 'image', src: '/assets/posts/bsw-0-2-meter-replacement/03.jpg', alt: 'Connect to the programmer', caption: 'Connect to the programmer', width: 1200, height: 1600 },
      { type: 'image', src: '/assets/posts/bsw-0-2-meter-replacement/04.jpg', alt: '93C76A 16-bit chip, connection diagram', caption: '93C76A 16-bit chip, connection diagram', width: 1600, height: 765 },
      { type: 'p', html: 'Program the correct mileage using the Neoprogrammer. Desolder the wires from the pads, connect and screw the display back in place.' },
      { type: 'p', html: 'To test it, apply 12V to pins 1 and 2, and ground to pin 13. Check the odometer reading and how the needles move.' },
      { type: 'p', html: 'If they didn’t budge—YOU’RE AWESOME. For everyone else, here are <a href="http://yadi.sk/i/g_uQdc_z3MVkbt" target="_blank" rel="noopener">instructions</a> for adjusting the magnet position. Thanks to the author!<br>We adjusted the needles, blew off the dust, and reassembled the instrument cluster.' },
      { type: 'p', html: 'Removing the instrument cluster on the third-generation model is simple and straightforward. Remove the glossy trim panels along the edges, pull the visor toward you (5 clips), disconnect the button, unscrew one screw, pull the instrument cluster toward you (2 clips), disconnect the connector—and the instrument cluster is in your hands.' },
      { type: 'p', html: 'The new instrument cluster has a beeper with a different sound, a different display (which appears brown when viewed at an angle in the dark), and warmer backlighting. Oh well, that’s how it is.' },
    ],
  },
  'mitsubishi-connect-cameras': {
    title: 'Mitsubishi Connect (SDA) + cameras',
    excerpt: 'Switching to Connect for pre-facelift cars with the half-surround view system means losing the cameras. I decided to display the camera images without guidelines, but full-screen…',
    content: [
      { type: 'p', html: 'Switching to Connect for pre-facelift cars with the half-surround view system means losing the cameras. I decided to display the camera images without guidelines, but full-screen.<br>After a fair fight, I managed to get my hands on the <b>8781A282</b> surround view module; I ordered a 40-pin connector for 100 rubles and modified the wiring harness leading to the <b>8781A075</b> camera control unit.' },
      { type: 'image', src: '/assets/posts/mitsubishi-connect-cameras/01.jpg', alt: 'General view', caption: 'General view', width: 1600, height: 1200 },
      { type: 'image', src: '/assets/posts/mitsubishi-connect-cameras/02.jpg', alt: 'Close-up', caption: 'Close-up', width: 1600, height: 1200 },
      { type: 'p', html: 'The unit was mounted in the same location, above the driver’s right leg.' },
      { type: 'image', src: '/assets/posts/mitsubishi-connect-cameras/03.jpg', alt: 'Installation and Connection', caption: 'Installation and Connection', width: 1600, height: 1200 },
      { type: 'p', html: 'The result: the cameras are working, but there’s no grid overlay on them. The mirror camera turns on immediately but turns off after two presses, since the surround view module has two modes.<br>There’s another option: ditch the camera in the left mirror and connect directly to the Connect. I’ll experiment with that this summer. Or there’s potential to build full surround view.' },
      { type: 'image', src: '/assets/posts/mitsubishi-connect-cameras/04.jpg', alt: 'C-246 is that very same 40-pin connector that goes to the 8781A075 unit — Mitsubishi Outlander PHEV. Parts in the photo: 8781A075', caption: 'C-246 is that very same 40-pin connector that goes to the 8781A075 unit', width: 1481, height: 1600 },
      { type: 'p', html: 'If anyone has anything to say about this, I’d love to hear it.' },
    ],
  },
  'bsw-0-1-etacs-replacement': {
    title: 'BSW: Step #0. Part One. Replacing the ETACS',
    excerpt: 'A couple of times over the winter, the thought crossed my mind: “Damn it! I wish I had blind spot monitoring :/” Once, a Honda Fit shot out from alongside my fender; the second…',
    content: [
      { type: 'p', html: 'A couple of times over the winter, the thought crossed my mind: “Damn it! I wish I had blind spot monitoring :/” Once, a Honda Fit shot out from alongside my fender; the second time, I almost swerved into an X5 that was catching up to me at over 100 km/h. I need to get this done.<br>The pre-facelift doesn’t have even the beginnings of this system. I’ll be building it from scratch.<br>I scored a legendary ETACS 688 at a reasonable price, flashed the coding from my own unit onto it—or rather, whatever I could salvage from it (the new model has about fifty more features). I programmed in the VIN.<br>I waited for a warm day and went to install it:' },
      { type: 'image', src: '/assets/posts/bsw-0-1-etacs-replacement/01.jpg', alt: 'I partially disassembled the dashboard, removing the kick panel and the glove compartment panel.', caption: 'I partially disassembled the dashboard, removing the kick panel and the glove compartment panel.', width: 1600, height: 1200 },
      { type: 'p', html: 'The access is amazing! This is nothing like a left-hand drive car. I disconnected the battery terminal, unplugged the connectors, and unscrewed the unit.' },
      { type: 'image', src: '/assets/posts/bsw-0-1-etacs-replacement/02.jpg', alt: 'The old one is on the left, the new one on the right.', caption: 'The old one is on the left, the new one on the right.', width: 1600, height: 1200 },
      { type: 'image', src: '/assets/posts/bsw-0-1-etacs-replacement/03.jpg', alt: 'Part Numbers — Mitsubishi Outlander PHEV. Parts in the photo: 8637B688, C8637', caption: 'Part Numbers', width: 1600, height: 1200 },
      { type: 'p', html: 'Since I was already under there, I figured I’d change the cabin air filter too—it was so dirty you could practically plant potatoes in there.' },
      { type: 'image', src: '/assets/posts/bsw-0-1-etacs-replacement/04.jpg', alt: 'I went with a charcoal one so you can’t tell it’s dirty :- — Mitsubishi Outlander PHEV. Parts in the photo: CAC18120', caption: 'I went with a charcoal one so you can’t tell it’s dirty :-', width: 1600, height: 1200 },
      { type: 'p', html: 'Plug in the connectors, reconnect the battery, and start it up.' },
      { type: 'image', src: '/assets/posts/bsw-0-1-etacs-replacement/05.jpg', alt: 'The new unit is in place.', caption: 'The new unit is in place.', width: 1600, height: 1200 },
      { type: 'p', html: 'Turn it off, put everything back together in reverse order. The whole thing took about an hour at most. It’s easy to take apart, and access is excellent.' },
    ],
  },
  'mitsubishi-connect-sda-tuning': {
    title: 'Mitsubishi Connect (SDA) Tuning',
    excerpt: 'I got my hands on a Mitsubishi Connect. The first thing to do, of course, is to get rid of the mediocre stock Toshiba amplifier chip and install the legendary TDA7850 paired with…',
    content: [
      { type: 'p', html: 'I got my hands on a Mitsubishi Connect. The first thing to do, of course, is to get rid of the mediocre stock Toshiba amplifier chip and install the legendary TDA7850 paired with a gorgeous 10,000uF ELNA RA3 series capacitor. A simple and very useful multimedia upgrade—I’d done the same thing on the J-11 before. But that one was much harder to take apart. The multimedia has been upgraded to version 1I and will be installed in the car soon.' },
      { type: 'image', src: '/assets/posts/mitsubishi-connect-sda-tuning/01.jpg', alt: 'The new capacitor, lying on its side, fits perfectly under the heat sink.', caption: 'The new capacitor, lying on its side, fits perfectly under the heat sink.', width: 1600, height: 1200 },
      { type: 'image', src: '/assets/posts/mitsubishi-connect-sda-tuning/02.jpg', alt: 'Photo from the Mitsubishi Outlander PHEV logbook', width: 1600, height: 1200 },
    ],
  },
  car: {
    title: 'About the Car',
    excerpt: 'A 2013 Mitsubishi Outlander PHEV in the G NAVI Package trim: work done during ownership and specifications.',
    content: [
      { type: 'image', src: '/assets/posts/car/01.jpg', alt: 'White Mitsubishi Outlander PHEV', width: 1280, height: 960 },
      { type: 'p', html: 'Originally a run-of-the-mill Mitsubishi Outlander PHEV in the G NAVI Package trim, bought for myself at auction in 2022.' },
      { type: 'p', html: 'Overall impression of the car: very unusual after three diesel SUVs.' },
      { type: 'h2', text: 'Work done during ownership' },
      {
        type: 'list',
        start: 0,
        items: [
          'Maintenance: replaced the oil in the generator and reduction gears (OEM); the engine has been running on Ravenol ECS 0W20 for the whole 2 years;',
          'Fog lights used as DRLs with coding modifications;',
          'Door sound deadening;',
          'Installation of a Pride Easy SQ audio system;',
          'Replaced the amplifier chip in the stock multimedia;',
          'After a minor accident, installed an inverter cooling pump from the facelift model with a protective frame and a bumper from the GF8W;',
          'Installed a steering wheel from the facelift model—it’s sleek and glossy;',
          'Cargo cover;',
          'Installed a spoiler;',
          'Modified the charger. A varistor was soldered in, since—unlike in Japan—the live wire isn’t always on the correct side here;',
          'A kickdown pedal was installed.',
        ],
      },
      { type: 'p', html: 'I do absolutely everything myself, except for engine oil changes.' },
      { type: 'p', html: 'There are plans for some minor modifications… To be continued.' },
      { type: 'h2', text: 'Specifications' },
      {
        type: 'list',
        items: [
          '2.0-liter hybrid (plug-in) engine, 118 hp',
          'Transmission: CVT',
          'All-wheel drive',
          'The car was manufactured in 2013 and purchased in 2022',
        ],
      },
    ],
  },
}
