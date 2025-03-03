import React from 'react'

export default function Faq() {
  return (
    <div className="faq">
        <h3>Frequently Asked Questions</h3>

        <div className="question">
            <p><strong>How do I apply for a mission?</strong></p>
            <p>
            To apply for a mission, create a profile, browse available listings, and click "Start Mission" 
            on your chosen job. Follow the instructions, and your application will be reviewed by the mission provider.
            </p>
        </div>

        <div className="question">
            <p><strong>What are the different mission ranks?</strong></p>
            <p>
            Missions range from D-Rank (beginner tasks) to S-Rank (high-risk elite operations). 
            Your experience level determines which missions you can accept.
            </p>
        </div>

        <div className="question">
            <p><strong>Can I specialize in a specific skill?</strong></p>
            <p>
            Yes, you can focus on Ninjutsu, Taijutsu, Genjutsu, Intelligence, Medical Support, or Strategic Planning. 
            Specializing helps you stand out and qualify for advanced missions.
            </p>
        </div>

        <div className="question">
            <p><strong>How do I increase my rank?</strong></p>
            <p>
            Completing missions successfully earns you reputation points. Accumulate enough, 
            and you'll rank up from Genin to Chunin, Jonin, and beyond, unlocking higher-tier opportunities.
            </p>
        </div>

        <div className="question">
            <p><strong>Is there a way to team up with other shinobi?</strong></p>
            <p>
            Yes, some missions require squad-based teamwork. You can join an existing team or form your own by 
            inviting other users to collaborate on multi-shinobi assignments.
            </p>
        </div>
    </div>
  )
}
