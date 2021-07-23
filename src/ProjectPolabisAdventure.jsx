import React, { Component, useEffect } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { connect } from 'react-redux';
import { updateCurrentPage } from './actions/pageActions';
import Images from "./components/Images.js";
import ReactPlayer from 'react-player';



function ScrollToTop() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return null;
  }

const code0 = `void UFinnySpells::LightningField()
{
	UE_LOG(LogTemp, Warning, TEXT(" Called Lightning"));
	if (FinnyCharacter == nullptr)
	{
		UE_LOG(LogTemp, Error, TEXT("Finny Spells Cant find Finny Chracter"));
		return;
	}
	if (FinnyCharacter->DamageFieldTrigger == nullptr)
	{
		UE_LOG(LogTemp, Error, TEXT("Finny Spells Cant find Finny Chracter Damage Trigger"));
		return;
	}
	// Damage
	DamageToDeal = LightningDamage;
	FinnyCharacter->DamageFieldTrigger->InitCapsuleSize(LightningFieldSize, LightningFieldSize);
	FinnyCharacter->DamageFieldTrigger->OnComponentBeginOverlap.AddDynamic(this, &UFinnySpells::OnBeginOverlap);
	FinnyCharacter->DamageFieldTrigger->OnComponentEndOverlap.AddDynamic(this, &UFinnySpells::OnEndOverlap);

	// Niagara
	if (LightningFieldVFX == nullptr)
	{
		UE_LOG(LogTemp, Error, TEXT("Finny Spells Cant find lightning VFX"));
		return;
	}
	EffectsComponent = UNiagaraFunctionLibrary::SpawnSystemAttached(LightningFieldVFX, 
		FinnyCharacter->GetRootComponent(), 
		FName("None"), FVector::ZeroVector, 
		FRotator::ZeroRotator, 
		FVector::OneVector, 
		EAttachLocation::KeepRelativeOffset, 
		true, 
		ENCPoolMethod::None, 
		true, 
		true);

	// Timers
	GetWorld()->GetTimerManager().SetTimer(DamageDelayTimer, 
		this, 
		&UFinnySpells::DealContinuousDamageAfterDelay, 
		LightningDamageDelay, 
		true);
	GetWorld()->GetTimerManager().SetTimer(CastTimer, 
		this, 
		&UFinnySpells::ResetDamageField, 
		SpellsParams[0].Duration, 
		false);
}
`.trim();

const code1 = `void AFinnyAIController::Tick(float DeltaSeconds)
{
	Super::Tick(DeltaSeconds);
	// Set player position
	FVector height = FVector(0, 1, 0);
	if (Blackboard == nullptr)
	{
		UE_LOG(LogTemp, Error, TEXT("%s cant find Blackboard"), *GetOwner()->GetName());
		return;
	}
	if (PlayerPawn == nullptr)
	{
		UE_LOG(LogTemp, Error, TEXT("%s cant find PlayerPawn"), *GetOwner()->GetName());
		return;
	}
	Blackboard->SetValueAsVector(TEXT("PlayerPosition"), PlayerPawn->GetActorLocation() + height);


	if (FinnyCharacter != nullptr)
	{
		Blackboard->SetValueAsBool(TEXT("bInCombat"), FinnyCharacter->bInCombat);
		Blackboard->SetValueAsBool(TEXT("bIsIdle"), FinnyCharacter->bIsIdle);
		Blackboard->SetValueAsBool(TEXT("bIsFollowing"), FinnyCharacter->bIsFollowing);
		Blackboard->SetValueAsBool(TEXT("bIsAggro"), FinnyCharacter->bIsAggro);
		Blackboard->SetValueAsVector(TEXT("RandomPositionPolabi"), 
			PlayerPawn->GetActorLocation() + Blackboard->GetValueAsVector("RandomPosition"));

		if (FinnyCharacter->bInCombat)
		{
			Blackboard->SetValueAsVector(TEXT("RandomPositionEnemy"), 
				FinnyCharacter->ClosestEnemyPosition + Blackboard->GetValueAsVector("RandomPosition"));
			Blackboard->SetValueAsVector(TEXT("EnemyPosition"), FinnyCharacter->ClosestEnemyPosition);
			if (FinnyCharacter->FinnyStats->Stats.FireRange > FVector::Dist(FinnyCharacter->GetActorLocation(), 
				FinnyCharacter->ClosestEnemyPosition))
			{
				Blackboard->SetValueAsBool(TEXT("bEnemyInRange"), true);
				FRotator FinnyRot = UKismetMathLibrary::FindLookAtRotation(FinnyCharacter->GetActorLocation(), 
					FinnyCharacter->ClosestEnemyPosition);
				FinnyCharacter->SetActorRotation(FinnyRot);
			}
			else
			{
				Blackboard->SetValueAsBool(TEXT("bEnemyInRange"), false);
			}
		}
		Blackboard->SetValueAsFloat(TEXT("MaxRangAwayFromPolabi"), FinnyCharacter->CurrentMaxRangeAwayFromPolabi);
	}
}
`.trim();

const code2 = `// Spells
void UPolabiSpells::PolabiLightningDash()
{
	LastSpellUsed = 0;
	if (PlayerCharacter == nullptr)
	{
		UE_LOG(LogTemp, Error, TEXT("%s has not found PlayerCharacter"), *GetOwner()->GetName());
		return;
	}
	if (LightningDashVFX == nullptr)
	{
		UE_LOG(LogTemp, Error, TEXT("%s has not found LightningDashVFX"), *GetOwner()->GetName());
		return;
	}
	float DashSpeed = PolabiLightningDashDistance / PolabiLightningDashTime;
	PlayerCharacter->LaunchCharacter(PlayerCharacter->GetActorForwardVector() * DashSpeed, false, false);
	GetWorld()->GetTimerManager().SetTimer(LightningDashTimer, 
		this, 
		&UPolabiSpells::StopMovement, 
		PolabiLightningDashTime, 
		false);

	// Play effects
	if (LightningDashVFX == nullptr)
	{
		UE_LOG(LogTemp, Error, TEXT("No Lightning Dash VFX Equipped"));
		return;
	}
	UNiagaraFunctionLibrary::SpawnSystemAtLocation(GetWorld(), 
		LightningDashVFX, 
		PlayerPawn->GetActorLocation(), 
		PlayerPawn->GetActorRotation());

	EndPolabiSpell();
}

void UPolabiSpells::StopMovement()
{
	if (PlayerPawn == nullptr)
	{
		UE_LOG(LogTemp, Error, TEXT("Player Pawn Missing"));
		return;
	}
	PlayerPawn->GetMovementComponent()->StopMovementImmediately();
}

void UPolabiSpells::StitchLabiLightningBuff()
{
	if (LightningPunch == nullptr)
	{
		UE_LOG(LogTemp, Error, TEXT("No Lightning Punch Equipped"));
		return;
	}
	if (PlayerCharacter == nullptr)
	{
		UE_LOG(LogTemp, Error, TEXT("Player Character Missing"));
		return;
	}
	// Replaces polabi attack with lightning attack
	PlayerCharacter->CurrentPunch = LightningPunch;

	// Speeds polabi up for the duration
	PlayerCharacter->GetCharacterMovement()->MaxWalkSpeed = LightningBuffSpeed;

	// timer end -> EndSpell
	GetWorld()->GetTimerManager().SetTimer(BuffTimer, 
		this, 
		&UPolabiSpells::EndStitchSpell, 
		StitchSpellsParams[LastBuffSpellUsed].Duration, 
		false);
}
`.trim();



class ProjectPolabisAdventure extends Component {

    componentDidMount(){
        this.props.updateCurrentPage(3);
    }
	
  render() {
    return (
      <div className="project-page">
        <ScrollToTop/>
        <div className="project-page-container">
        <div className="project-page-title">
          <h1>Polabi's Adventure</h1>
		  <div className="project-page-image-container">
		  <img src={Images[20]} alt="Level"/> 
              <img src={Images[16]} alt="Level"/> 
        	</div>
          <p>Polabi’s Adventure is an ARPG. You can unlock a variety of spells and add them to yourself and your buddies.</p>
        </div>
        <div className="project-page-description">
            <h1>Cloth physics</h1>
			<div className="project-page-video">
                <ReactPlayer 
                  className="project-page-video-player"
                  width='100%'
                  height='506.25px'
                  url = "https://youtu.be/1t4C5VhI-UA"/>
              </div>
            <p>This system helps make Polabi’s cloak more interesting. Through Unreal’s cloth system I was able to make it look rigid enough to give off a more rubbery feel, while still having the cloth-like physics.</p>
        </div>
        <div className="project-page-description">
            <h1>Bone chain</h1>
			<div className="project-page-image-container">
              <img src={Images[15]} alt="Finny Bones"/> 
        	</div>
            <p>Due to Finny having no animations, it was fairly boring having him float around. Unreal’s bone chain system allows Finny to look more integrated into the world around him. However, Unreal’s bone chain system works starting from the root. To bypass this, I had to reverse the Armature to allow it to integrate nicely with Unreal’s system.</p>
        </div>
        <div className="project-page-description">
            <h1>Player spell system</h1>
			<SyntaxHighlighter className="project-code-block" language="csharp" style={ dracula }>
                    {code0}
                </SyntaxHighlighter>
				<SyntaxHighlighter className="project-code-block" language="csharp" style={ dracula }>
                    {code2}
                </SyntaxHighlighter>
            <p>The player and each of his buddies all have a unique spell architecture. Polabi’s spells can be very dynamic but mostly revolve around movement. Finny’s spells are mostly AOE spell effects. Lastly, Stitch’s spells are used to buff Polabi. </p>
        </div>
        <div className="project-page-description">
            <h1>AI buddy</h1>
			<div className="project-page-image-container">
              <img src={Images[14]} alt="Finny AI"/> 
        	</div>
			<SyntaxHighlighter className="project-code-block" language="csharp" style={ dracula }>
                    {code1}
                </SyntaxHighlighter>
            <p>I wanted Finny to feel integrated inside the world of the game. I added random bobbing both vertical and horizontally based on whether or not he is moving or idle. The bone chain system also helps with keeping him more visually interesting as he moves around. I also built a system where you can instruct him to be more aggressive or defensive in combat. This allows you to have some control over where Finny’s abilities target, whilst allowing Finny to freely move around during combat</p>
        </div>
        <div className="project-page-description">
            <h1>Cutscenes</h1>
			<div className="project-page-video-container">
			<ReactPlayer 
                  className="project-page-video-player"
                  width='100%'
                  height='506.25px'
                  url = "https://youtu.be/2zF_hZy2LyQ"/>
			  <ReactPlayer 
                  className="project-page-video-player"
                  width='100%'
                  height='506.25px'
                  url = "https://youtu.be/Rd0ncel-dvQ"/>
			  <ReactPlayer 
                  className="project-page-video-player"
                  width='100%'
                  height='506.25px'
                  url = "https://youtu.be/D9S5oMtFR1Y"/>
			</div>
            <p>Through using Unreal’s sequencer system, I was able to add cutscenes into my game. The cutscenes are pre-rendered and added in.</p>
        </div>
        <div className="project-page-description">
            <h1>Shaders</h1>
			<div className="project-page-image-container">
				<img src={Images[10]} alt="Barrier Shader BP"/> 
				<img src={Images[11]} alt="Barrier Shader Mat"/> 
				<img src={Images[12]} alt="Cel Shader BP"/> 
				<img src={Images[13]} alt="Fakelabi Shader Mat"/> 
				<img src={Images[17]} alt="Outline Shader BP"/> 
				<img src={Images[18]} alt="Outline Shader BP"/> 
				<img src={Images[19]} alt="Outline Shader BP"/> 
        	</div>
            <p>I used a variety of shaders in this project. I made a toon shader and an outline shader for the main aesthetic of the game. I also added a “dark world” shader for the ending of the game. These are all added in post-processing. The barrier I made and some hit effects are some examples of shaders not included in post-processing.</p>
        </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      currentPage: state.currentPage
    }
  }
  
  export default connect(mapStateToProps, {updateCurrentPage})(ProjectPolabisAdventure);
